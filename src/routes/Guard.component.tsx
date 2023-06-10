import type { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import type { GuardFunc, RouteType } from '../types'
import { hasMessageProp } from '../types/guards'
import { path } from './paths'

function Guard (props: { route: RouteType }) {
  const { route } = props
  const location = useLocation()
  const dispatch = useDispatch()
  let Component: unknown = <route.component />
  if (route.component && (route.layout != null)) {
    Component = (
			<route.layout>
				<route.component />
			</route.layout>
    )
  }

  if ((route.guards != null) && route.guards.length > 0) {
    const caught = 'guard-caught'
    try {
      route.guards.forEach((guard: GuardFunc) => {
        if (typeof guard === 'function') {
          const g = guard({ location, dispatch })
          if (typeof g === 'string') {
            Component = <Navigate replace to={g} />
            throw Error(caught)
          } else if (typeof g === 'boolean' && !g) {
            Component = <Navigate replace to={path.SIGNIN} />
            throw Error(caught)
          }
        }
      })
    } catch (e: unknown) {
      if (hasMessageProp(e)) {
        if (e?.message !== caught) {
          throw Error(e?.message)
        }
      }
    }
  }

  return Component as ReactElement
}

export default Guard
