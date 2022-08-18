import React from 'react'
import Card from '../../components/Card'
import { freelanceProfiles } from '../../utils/data'

const Freelances = () => {
  
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
        />
      ))}
    </div>
  )
}

export default Freelances