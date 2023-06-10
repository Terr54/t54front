import type { FC } from 'react'
import React, { useRef, useState, useEffect } from 'react'
import * as S from './Avatar.style'
import type { AvatarProps } from './avatar.types'

const Avatar: FC<AvatarProps> = ({
  bgImage, height, width, editable
}) => {
  const [avatarHeight, getAvatarHeight] = useState(0)
  const [avatarWidth, getAvatarWidth] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (elementRef.current != null) {
      getAvatarHeight(elementRef.current.clientHeight)
      getAvatarWidth(elementRef.current.clientWidth)
    }
  })
  return (
		<>
			<S.Avatar ref={elementRef} bgImage={bgImage} height={height} width={width} />
			{editable && (
				<S.EditButton title='Edit Profile Picture' avatarHeight={avatarHeight} avatarWidth={avatarWidth}>
					<S.Edit />
				</S.EditButton>
			)}
		</>

  )
}

export default Avatar
