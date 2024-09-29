import { observer } from 'mobx-react'
import { FC, useState } from 'react'
import styled from 'styled-components'
import { Emission } from '../screens/SectorsBreakdownScreen/TileVariants/Emission'
import { Saplings } from '../screens/SectorsBreakdownScreen/TileVariants/Saplings'
import { MediumTrees } from '../screens/SectorsBreakdownScreen/TileVariants/MediumTrees'
import { OldTrees } from '../screens/SectorsBreakdownScreen/TileVariants/OldTrees'
import { Parks } from '../screens/SectorsBreakdownScreen/TileVariants/Parks'
import { TileSwapperProps } from '../types/TileSwapper'

export const Tile = styled.div`
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;

  background-color: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.primary};

  cursor: pointer;
  ${({ theme }) => `
    border: 5px solid ${theme.secondary};
  `}

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: inherit;
  }
`

export const TileSwapper: FC<TileSwapperProps> = observer((props) => {
  const Tiles =
    props.sectorName === 'user'
      ? {
          emission: Emission,
          saplings: Saplings,
        }
      : {
          emission: Emission,
          saplings: Saplings,
          mediumTrees: MediumTrees,
          OldTrees: OldTrees,
          parks: Parks,
        }
  const components = Object.values(Tiles)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length)
  }

  const CurrentTile = components[currentIndex]

  return (
    <>
      <Tile onClick={handleClick}>
        <CurrentTile {...props} />
      </Tile>
    </>
  )
})
