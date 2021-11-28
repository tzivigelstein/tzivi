import React from 'react'
import styles from './activityindicator.module.css'

const ActivityIndicator = () => {
  return (
    <div>
      <svg className={styles.svg} viewBox="25 25 50 50">
        <circle className={styles.circle} cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  )
}

export default ActivityIndicator