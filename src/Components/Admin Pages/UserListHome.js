import FooterComponent from "../HomepageComponents/FooterComponent";
import Header from "../HomepageComponents/Header";
import TableComponent from "../TableComponent";

const UsersListHome = () => {
    return(

        <div class="container-fluid">
            <section>
                <Header />
            </section>
            <section>
                <TableComponent />
            </section>

            <section>
                <FooterComponent />
            </section>
        </div>

    );
}

export default UsersListHome;