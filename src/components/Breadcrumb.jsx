import React from 'react';
import { 
    Breadcrumbs as MUIBreadcrumbs,
    Link 
}from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Breadcrumbs = props => {
    const { 
        history, 
        location : { pathname }
    } = props;
    const pathnames = pathname.split("/").filter(x => x);

    return (
        <MUIBreadcrumbs aria-label="breadcrumb">
            <Link onClick={() => history.push("/inicio")} >Inicio</Link>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index +1).join("/inicio")}`
                console.log(routeTo);
                return <Link onClick={() => history.push(routeTo)} >{name}</Link>;
            })}
        </MUIBreadcrumbs>
    );
}

export default withRouter(Breadcrumbs)
