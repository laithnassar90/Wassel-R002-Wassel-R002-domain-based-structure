import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    fallback: PropTypes.node
  }

  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>Please refresh the page or try again later.</p>
        </div>
      )
    }

    return this.props.children
  }
}