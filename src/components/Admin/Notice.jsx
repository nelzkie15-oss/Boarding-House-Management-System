import Nav from "../layouts/Nav";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";

const Notice = () => {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <Sidebar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark"> Notice Configuration</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Notice Configuration
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <section className="content">
            <div className="card card-info elevation-2">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <form role="form" id="quickForm">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-8 offset-md-2">
                          <div className="form-group">
                            <label>Title</label>
                            <input
                              type="text"
                              name="title"
                              className="form-control"
                              placeholder="Title"
                            />
                          </div>
                        </div>
                        <div className="col-md-8 offset-md-2">
                          <div className="form-group">
                            <label>Notice Body</label>
                            <textarea className="form-control"></textarea>
                          </div>
                        </div>
                     
                      <div className="col-md-8 offset-md-2">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                      </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
        <aside className="control-sidebar control-sidebar-dark"></aside>
      </div>
    </>
  );
};
export default Notice;
