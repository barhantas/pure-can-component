import { array, object, node } from "prop-types";

Can.propTypes = {
  have: array,
  oneOf: array,
  authorities: object,
  children: node,
  veyahut: node
};

Can.defaultProps = {
  veyahut: null
};

function Can({ have, oneOf, authorities, children, veyahut }) {
  const authorityKeys = Object.keys(authorities);
  let canAccess;
  if (Array.isArray(oneOf)) {
    canAccess = oneOf.some(
      necessaryAuthority => authorityKeys.indexOf(necessaryAuthority) !== -1
    );
  }
  if (Array.isArray(have)) {
    canAccess = !have.some(
      necessaryAuthority => authorityKeys.indexOf(necessaryAuthority) === -1
    );
  }

  return canAccess ? children : veyahut;
}

export default Can;
