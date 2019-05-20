import React, { Component } from 'react'
import { connect } from 'react-redux';

class Nav extends Component {
    //
    handleAddNew=(event) =>{
        // handle  next page transfer event
        event.preventDefault();
        this.props.changeEditStatusNav();
        this.props.changeAddStatusNav();
    }
  render() {
    return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
			<a className="navbar-brand" href="https://www.facebook.com/">
				PaulDuong
			</a>
			<button
				className="navbar-toggler d-lg-none"
				type="button"
				data-toggle="collapse"
				data-target="#collapsibleNavId"
				aria-controls="collapsibleNavId"
				aria-expanded="false"
				aria-label="Toggle navigation"
			/>
			<div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="http://zing.vn" onClick={event => this.handleAddNew(event)}>
							Thêm Mới
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="dropdownId"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Dropdown
						</a>
						<div className="dropdown-menu" aria-labelledby="dropdownId">
							<a className="dropdown-item" href="#">
								Action 1
							</a>
							<a className="dropdown-item" href="#">
								Action 2
							</a>
						</div>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        CHANGE_ADD_STATUS: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatusNav: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        changeAddStatusNav: () => {
            dispatch({
				type: 'CHANGE_ADD_STATUS',
			});
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
