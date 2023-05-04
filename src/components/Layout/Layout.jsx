import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Navigation } from "components/Navigation/Navigation"
import { Loader } from "components/Loader/Loader"
import { UserMenu } from "components/UserMenu/UserMenu"
import { Header } from "components/Header/Header"
import { useSelector } from "react-redux"
import { isLoggedInSelector } from "redux/selectors"

export function Layout() {

    const isLoggedIn = useSelector(isLoggedInSelector);

    return (
        <>
            <Header>
                <Navigation /> 
                {isLoggedIn && <UserMenu />}
            </Header>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
};