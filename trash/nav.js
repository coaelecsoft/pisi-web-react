export default function Nav() {
    return (
        <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}
        >
            <Link to="/Home">Invoices</Link> |{" "}
            <Link to="/invoices">Invoices</Link> |{" "}

        </nav>
    );
}




