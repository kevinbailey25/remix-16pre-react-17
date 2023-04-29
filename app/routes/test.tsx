import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

export const loader = () => {
	return json({ test: 'data' })
}

export default function Test(){
	console.log('RENDER TEST')
	const { test } = useLoaderData<typeof loader>()
	console.log('RENDER AFTER USELOADERDATA')

	return <>{test}</>
}