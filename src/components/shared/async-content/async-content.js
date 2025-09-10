// utils
import React, { Component, PropTypes } from 'react'

// components
import { LoadingItem } from '../loading-item/loading-item'
import { LoadingSpinner } from '../loading-spinner/loading-spinner'

export const AsyncContent = ({isFetching, error, children, loadingMessage, useSpinner = false}) => {
  if (isFetching) {
    return useSpinner ? 
      <LoadingSpinner message={loadingMessage} /> : 
      <LoadingItem />
  }
  
  if (error) {
    return (
      <div className="error-message">
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    )
  }
  
  return <div>{children}</div>
}

AsyncContent.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  children: PropTypes.node,
  loadingMessage: PropTypes.string,
  useSpinner: PropTypes.bool,
}
