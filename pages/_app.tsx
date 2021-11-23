import { DrizzleContext } from '@drizzle/react-plugin'
import { Drizzle } from "@drizzle/store"
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import Web3 from "web3"
import '../styles/globals.css'
import CheckList from './../build/contracts/CheckList.json'

const drizzleOptions = {
  contracts: [CheckList],
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:7545"),
  },
}

const drizzle = new Drizzle(drizzleOptions);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;
          if (!initialized) {
            return "Loading..."
          }
          return (
            <Component drizzle={drizzle} drizzleState={drizzleState} {...pageProps} />
          )
        }}
      </DrizzleContext.Consumer>

    </DrizzleContext.Provider>
  )
}

export default MyApp
