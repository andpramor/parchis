import './Board.css'

export const Board = ({ turn = 'blue' }) => {
  return (
    <div className='board-container'>
      <div className='board'>
        <div className='quadrant redtile' id='redQuadrant' />
        <div className='quadrant' id='topPathQuadrant'>
          <div className='tile' id='tile35' />
          <div className='tile redtile safe' id='redtile1' />
          <div className='tile' id='tile33' />
          <div className='tile' id='tile36' />
          <div className='tile redtile' id='redtile2' />
          <div className='tile' id='tile32' />
          <div className='tile' id='tile37' />
          <div className='tile redtile' id='redtile3' />
          <div className='tile' id='tile31' />
          <div className='tile' id='tile38' />
          <div className='tile redtile' id='redtile4' />
          <div className='tile' id='tile30' />
          <div className='tile redtile' id='tile39' />
          <div className='tile redtile' id='redtile5' />
          <div className='tile safe' id='tile29' />
          <div className='tile' id='tile40' />
          <div className='tile redtile' id='redtile6' />
          <div className='tile' id='tile28' />
          <div className='tile' id='tile41' />
          <div className='tile redtile' id='redtile7' />
          <div className='tile' id='tile27' />
        </div>
        <div className='quadrant bluetile' id='blueQuadrant' />
        <div className='quadrant' id='leftPathQuadrant'>
          <div className='tile' id='tile50' />
          <div className='tile' id='tile49' />
          <div className='tile' id='tile48' />
          <div className='tile' id='tile47' />
          <div className='tile safe' id='tile46' />
          <div className='tile' id='tile45' />
          <div className='tile' id='tile44' />
          <div className='tile greentile safe' id='greentile1' />
          <div className='tile greentile' id='greentile2' />
          <div className='tile greentile' id='greentile3' />
          <div className='tile greentile' id='greentile4' />
          <div className='tile greentile' id='greentile5' />
          <div className='tile greentile' id='greentile6' />
          <div className='tile greentile' id='greentile7' />
          <div className='tile' id='tile52' />
          <div className='tile' id='tile53' />
          <div className='tile' id='tile54' />
          <div className='tile' id='tile55' />
          <div className='tile greentile' id='tile56' />
          <div className='tile' id='tile57' />
          <div className='tile' id='tile58' />
        </div>
        <div className='quadrant' id='centerQuadrant'>
          <div id='centerTop'>
            <div className='tile' id='tile42' />
            <div className='tile redtile' id='redtile8' />
            <div className='tile' id='tile26' />
          </div>
          <div id='centerBot'>
            <div className='tile' id='tile60' />
            <div className='tile yellowtile' id='yellowtile8' />
            <div className='tile' id='tile8' />
          </div>
          <div id='centerLeft'>
            <div className='tile' id='tile43' />
            <div className='tile greentile' id='greentile8' />
            <div className='tile' id='tile59' />
          </div>
          <div id='centerRight'>
            <div className='tile' id='tile25' />
            <div className='tile bluetile' id='bluetile8' />
            <div className='tile' id='tile9' />
          </div>
          <div id='centerCenter'>
            <div className='redtile' id='redTriangleTile' />
            <div className='yellowtile' id='yellowTriangleTile' />
            <div className='greentile' id='greenTriangleTile' />
            <div className='bluetile' id='blueTriangleTile' />
          </div>
        </div>
        <div className='quadrant' id='rightPathQuadrant'>
          <div className='tile' id='tile24' />
          <div className='tile' id='tile23' />
          <div className='tile bluetile' id='tile22' />
          <div className='tile' id='tile21' />
          <div className='tile' id='tile20' />
          <div className='tile' id='tile19' />
          <div className='tile' id='tile18' />
          <div className='tile bluetile' id='bluetile7' />
          <div className='tile bluetile' id='bluetile6' />
          <div className='tile bluetile' id='bluetile5' />
          <div className='tile bluetile' id='bluetile4' />
          <div className='tile bluetile' id='bluetile3' />
          <div className='tile bluetile' id='bluetile2' />
          <div className='tile bluetile safe' id='bluetile1' />
          <div className='tile' id='tile10' />
          <div className='tile' id='tile11' />
          <div className='tile safe' id='tile12' />
          <div className='tile' id='tile13' />
          <div className='tile' id='tile14' />
          <div className='tile' id='tile15' />
          <div className='tile' id='tile16' />
        </div>
        <div className='quadrant greentile' id='greenQuadrant' />
        <div className='quadrant' id='botPathQuadrant'>
          <div className='tile' id='tile61' />
          <div className='tile yellowtile' id='yellowtile7' />
          <div className='tile' id='tile7' />
          <div className='tile' id='tile62' />
          <div className='tile yellowtile' id='yellowtile6' />
          <div className='tile' id='tile6' />
          <div className='tile safe' id='tile63' />
          <div className='tile yellowtile' id='yellowtile5' />
          <div className='tile yellowtile' id='tile5' />
          <div className='tile' id='tile64' />
          <div className='tile yellowtile' id='yellowtile4' />
          <div className='tile' id='tile4' />
          <div className='tile' id='tile65' />
          <div className='tile yellowtile' id='yellowtile3' />
          <div className='tile' id='tile3' />
          <div className='tile' id='tile66' />
          <div className='tile yellowtile' id='yellowtile2' />
          <div className='tile' id='tile2' />
          <div className='tile' id='tile66' />
          <div className='tile yellowtile safe' id='yellowtile1' />
          <div className='tile' id='tile1' />
        </div>
        <div className='quadrant yellowtile' id='yellowQuadrant' />
      </div>
    </div>
  )
}
