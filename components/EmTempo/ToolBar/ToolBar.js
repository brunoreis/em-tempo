import React from 'react'
import styled from 'styled-components'

const RefreshImage = styled.img`
	width: 20px;
`

const Button = styled.div`
	height: 25px;
	cursor: pointer;
`
const Tools = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-around;
	align-items: center;
	bottom: 0;
	height: 37px;
	background-color: #fff;
	width: 100%;
	border-top: #eee solid 2px;
	box-shadow: 0px 0 10px rgba(5, 5, 5, 0.2);
`

export const ToolBar = () => (
	<Tools>
		<Button
			onClick={() => {
				console.log('Alo Maria')
				window.location.reload()
			}}
		>
			<RefreshImage src={require('./refresh.png')} alt="refresh" />
		</Button>
		<Button
			onClick={() => {
				console.log('Alo Maria')
				window.location.reload()
			}}
		>
			<RefreshImage src={require('./refresh.png')} alt="refresh" />
		</Button>
	</Tools>
)
