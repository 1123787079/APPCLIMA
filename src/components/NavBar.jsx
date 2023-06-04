import "bootstrap/dist/css/bootstrap.css"
export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">INICIO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">SOBRE NOSOTROS</a>
                            <a class="nav-link" href="#">CONTACTO</a>

                        </div>
                    </div>
                </div>
            </nav>
<br></br>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <form class="d-flex" role="search">
                        <input className="form-control inputBuscar" value={""} placeholder="Busqueda por Ciudad" aria-label="Buscar" />
                        <button className="btn btn-success">

                        </button>
                    </form>
                </div>
            </nav>
        </div>
    )
}