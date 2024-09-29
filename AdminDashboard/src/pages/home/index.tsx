import { Outlet } from "react-router-dom"
import Layout from "../../components/layout"

export const Home = () => {
  return (
    <div>
        Home
        <Layout>
                        <Outlet />
                      </Layout>
    </div>
  )
}