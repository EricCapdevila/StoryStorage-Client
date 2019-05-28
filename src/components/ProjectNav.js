
import React from "react";

const ProjectNav = (props) => {
    
  const renderCharacters=()=>props.handleEditor('characters')
  const renderGeneral=()=>props.handleEditor('general')
  const renderChapters=()=>props.handleEditor('chapters')
  const renderLocations=()=>props.handleEditor('locations')
  const renderTimeline=()=>props.handleEditor('timeline')
 
    return (
      <aside className='side-nav'>
        <ul>
          <li><button onClick={renderGeneral}>General</button></li>
          <li><button onClick={renderChapters}>Chapters</button></li>
          <li><button onClick={renderCharacters}>Characters</button></li>
          <li><button onClick={renderLocations}>Locations</button></li>
          <li><button onClick={renderTimeline}>Timeline</button></li>
        </ul>
      </aside>
    );
  }


export default ProjectNav;