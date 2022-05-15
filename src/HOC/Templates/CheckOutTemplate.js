import { Route } from "react-router-dom";

const CheckoutTeamplate = ({ Component, ...restRoute }) => {
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return <Component {...propsRoute} />;
      }}
    />
  );
};
export default CheckoutTeamplate;
