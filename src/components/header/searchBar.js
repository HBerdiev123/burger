import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false
    };
  }

  handleSearch() {
    this.setState({ search: !this.search });
  }

  render() {
    return (
      <div className="navbar-option-item navbar-option-search">
        <button
          onClick={this.handleSearch}
          className={this.search ? "dropdown-toggle show" : "dropdown-toggle"}
          type="button"
          id="search1"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={this.search ? "false" : ""}
        >
          <i className="flaticon-loupe"></i>
        </button>

        <div
          className={this.search ? "dropdown-menu show" : "dropdown-menu"}
          aria-labelledby="search1"
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <button>
                <i className="flaticon-loupe"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
