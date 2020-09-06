import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


/**
 *
 * @param Component
 * @param customSpinner
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const GPRenderComponent = ({component: Component, customSpinner, ...rest}) => {
    const {spinner, data} = rest;

    return (
        <BrowserRouter>
            <Route
                {...rest}
                render={props =>
                    customSpinner !== null ? (
                        spinner ? (
                            customSpinner
                        ) : (
                            <Component {...props} data={data}/>
                        )
                    ) : spinner ? (
                        <p>Loading data...</p>
                    ) : (
                        <Component {...props} data={data}/>
                    )
                }
            />
        </BrowserRouter>

    );
};

/**
 *
 * @type {{customSpinner: null, data: shim, spinner: boolean}}
 */
GPRenderComponent.defaultProps = {
    spinner: false,
    customSpinner: null,
    data: PropTypes.any
};

/**
 *
 * @type {{customSpinner: shim, data: shim, spinner: shim}}
 */
GPRenderComponent.propTypes = {
    spinner: PropTypes.bool.isRequired,
    data: PropTypes.object,
    customSpinner: PropTypes.element
};

export default GPRenderComponent;
