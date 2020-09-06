import React, { Suspense } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";

/**
 *
 * @param Component
 * @param customSpinner
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const GPRenderComponent = ({
  component: Component,
  customSpinner,
  ...rest
}) => {
  const { spinner, data } = rest;

  return (
    <Suspense
      fallback={
        customSpinner !== null && spinner ? (
          customSpinner
        ) : spinner ? (
          <div className={"fallbackLoading"}>loading...</div>
        ) : null
      }
    >
      <BrowserRouter>
        <Route
          {...rest}
          render={(props) =>
            customSpinner !== null ? (
              spinner ? (
                customSpinner
              ) : (
                <Component {...props} data={data} />
              )
            ) : spinner ? (
              <div className={"beforeRenderLoading"}>Loading data...</div>
            ) : (
              <Component {...props} data={data} />
            )
          }
        />
      </BrowserRouter>
    </Suspense>
  );
};

const ErrorComponent = () => {
  return (
    <div className={"errorComponentClass"}>
      <h1>Component prop required property</h1>
    </div>
  );
};

/**
 *
 * @type {{customSpinner: null, data: shim, spinner: boolean}}
 */
GPRenderComponent.defaultProps = {
  spinner: false,
  customSpinner: null,
  data: PropTypes.any,
  component: ErrorComponent,
};

/**
 *
 * @type {{customSpinner: shim, data: shim, spinner: shim}}
 */
GPRenderComponent.propTypes = {
  spinner: PropTypes.bool.isRequired,
  data: PropTypes.object,
  customSpinner: PropTypes.element,
};

export default GPRenderComponent;
