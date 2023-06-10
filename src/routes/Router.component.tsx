import { Suspense, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getLocalUser } from '../storage/local.storage'
import { useDispatch } from '../store'
import { loadAllProductCategories } from '../store/features/slices/product/categories'
import { loadUserAction, setUserInfo } from '../store/features/slices/user'
import type { RouteType } from '../types'
import Guard from './Guard.component'
import RouteLoader from './RouteLoader.component'
import { routes } from './Routes'

function AppRouter () {
  const dispatch = useDispatch();
  const effectRef = useRef(false);
  useEffect(() => {
    if (!effectRef.current) {
      const user = getLocalUser();
      dispatch(setUserInfo(user));
      dispatch(loadUserAction());
      dispatch(loadAllProductCategories());
    }
    effectRef.current = true;
  }, []);
  const unwrap = (_routes: RouteType[]): any => _routes.map(route => {
    if (route.children != null) {
      // Unwrap
      return (
				<Route key={route.path} path={route.path} element={<Guard route={route} />}>
					{ unwrap(route.children) }
				</Route>
      )
    }

    return <Route key={route.path} path={route.path} element={<Guard route={route} />} />
  })
  return (
		<div className='app'>
			<Router>
				<Suspense fallback={<RouteLoader />}>
					<Routes>
						{ unwrap(routes) }
					</Routes>
				</Suspense>
			</Router>
		</div>
  )
}

export default AppRouter
