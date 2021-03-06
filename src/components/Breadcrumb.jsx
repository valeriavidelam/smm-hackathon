import React from 'react';
import { 
    Breadcrumbs as MUIBreadcrumbs,
    Link 
}from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Breadcrumbs = props => {
    const { 
        history, 
        location : { pathname}
    } = props;
    const pathnames = pathname.split('/').filter(x => x);

    return (
        <div className='breadCrumb'>
        <MUIBreadcrumbs aria-label="breadcrumb">
            <Link onClick={() => history.push("/inicio")} >Inicio</Link>
            {pathnames.map((name, index) => {
                return <Link onClick={() => history.push("/")} >{name}</Link>;
            })}
        </MUIBreadcrumbs>
        </div>
    );
}

export default withRouter(Breadcrumbs)
