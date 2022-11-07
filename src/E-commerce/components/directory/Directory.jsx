import React from 'react'
import { useSelector } from 'react-redux'
import MenuItem from '../menu-item/Menu-Item'
import { DirectoryMenuContainer } from './styles'
import { selectDirectorySections } from '../../../redux/directory/directorySelect'

function Directory() {
    const collections = useSelector(selectDirectorySections)
    return (
        <DirectoryMenuContainer>
        {collections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </DirectoryMenuContainer>
    )
}

export default Directory
