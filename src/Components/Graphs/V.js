import GraphCSS from './Graph.module.css'

export default function V() {
    return (
        <div className={GraphCSS.container}>
            <div className={GraphCSS.items}>
                <h1>Select the desired graph from left side menu</h1>
                <h3>Application currently only works locally</h3>
            </div>
        </div>
    )
}
