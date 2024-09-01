import './Board.css'

export const Board = () => {
  return (
    <div className='board-container'>
      <div className='board'>
        <div className='quadrant redbox' id='quadrant1' />
        <div className='quadrant' id='quadrant2'>
          <div className='box' id='box35'>35</div>
          <div className='box redbox safe' id='redbox1'>34</div>
          <div className='box' id='box33'>33</div>
          <div className='box' id='box36'>36</div>
          <div className='box redbox' id='redbox2' />
          <div className='box' id='box32'>32</div>
          <div className='box' id='box37'>37</div>
          <div className='box redbox' id='redbox3' />
          <div className='box' id='box31'>31</div>
          <div className='box' id='box38'>38</div>
          <div className='box redbox' id='redbox4' />
          <div className='box' id='box30'>30</div>
          <div className='box redbox' id='box39'>39</div>
          <div className='box redbox' id='redbox5' />
          <div className='box safe' id='box29'>29</div>
          <div className='box' id='box40'>40</div>
          <div className='box redbox' id='redbox6' />
          <div className='box' id='box28'>28</div>
          <div className='box' id='box41'>41</div>
          <div className='box redbox' id='redbox7' />
          <div className='box' id='box27'>27</div>
        </div>
        <div className='quadrant bluebox' id='quadrant3' />
        <div className='quadrant' id='quadrant4'>
          <div className='box' id='box50'>50</div>
          <div className='box' id='box49'>49</div>
          <div className='box' id='box48'>48</div>
          <div className='box' id='box47'>47</div>
          <div className='box safe' id='box46'>46</div>
          <div className='box' id='box45'>45</div>
          <div className='box' id='box44'>44</div>
          <div className='box greenbox safe' id='greenbox1'>51</div>
          <div className='box greenbox' id='greenbox2' />
          <div className='box greenbox' id='greenbox3' />
          <div className='box greenbox' id='greenbox4' />
          <div className='box greenbox' id='greenbox5' />
          <div className='box greenbox' id='greenbox6' />
          <div className='box greenbox' id='greenbox7' />
          <div className='box' id='box52'>52</div>
          <div className='box' id='box53'>53</div>
          <div className='box' id='box54'>54</div>
          <div className='box' id='box55'>55</div>
          <div className='box greenbox' id='box56'>56</div>
          <div className='box' id='box57'>57</div>
          <div className='box' id='box58'>58</div>
        </div>
        <div className='quadrant' id='quadrant5'>
          <div id='topCenter'>
            <div className='box' id='box42'>42</div>
            <div className='box redbox' id='redbox8' />
            <div className='box' id='box26'>26</div>
          </div>
          <div id='centerCenter'>
            <div className='redbox' id='boxCenterTop' />
            <div className='yellowbox' id='boxCenterBot' />
            <div className='greenbox' id='boxCenterLeft' />
            <div className='bluebox' id='boxCenterRight' />
          </div>
          <div id='botCenter'>
            <div className='box' id='box60'>60</div>
            <div className='box yellowbox' id='yellowbox8' />
            <div className='box' id='box8'>8</div>
          </div>
          <div id='leftCenter'>
            <div className='box' id='box43'>43</div>
            <div className='box greenbox' id='greenbox8' />
            <div className='box' id='box59'>59</div>
          </div>
          <div id='rightCenter'>
            <div className='box' id='box25'>25</div>
            <div className='box bluebox' id='bluebox8' />
            <div className='box' id='box9'>9</div>
          </div>
        </div>
        <div className='quadrant' id='quadrant6'>
          <div className='box' id='box24'>24</div>
          <div className='box' id='box23'>23</div>
          <div className='box bluebox' id='box22'>22</div>
          <div className='box' id='box21'>21</div>
          <div className='box' id='box20'>20</div>
          <div className='box' id='box19'>19</div>
          <div className='box' id='box18'>18</div>
          <div className='box bluebox' id='bluebox7' />
          <div className='box bluebox' id='bluebox6' />
          <div className='box bluebox' id='bluebox5' />
          <div className='box bluebox' id='bluebox4' />
          <div className='box bluebox' id='bluebox3' />
          <div className='box bluebox' id='bluebox2' />
          <div className='box bluebox safe' id='bluebox1'>17</div>
          <div className='box' id='box10'>10</div>
          <div className='box' id='box11'>11</div>
          <div className='box safe' id='box12'>12</div>
          <div className='box' id='box13'>13</div>
          <div className='box' id='box14'>14</div>
          <div className='box' id='box15'>15</div>
          <div className='box' id='box16'>16</div>
        </div>
        <div className='quadrant greenbox' id='quadrant7' />
        <div className='quadrant' id='quadrant8'>
          <div className='box' id='box61'>61</div>
          <div className='box yellowbox' id='yellowbox7' />
          <div className='box' id='box7'>7</div>
          <div className='box' id='box62'>62</div>
          <div className='box yellowbox' id='yellowbox6' />
          <div className='box' id='box6'>6</div>
          <div className='box safe' id='box63'>63</div>
          <div className='box yellowbox' id='yellowbox5' />
          <div className='box yellowbox' id='box5'>5</div>
          <div className='box' id='box64'>64</div>
          <div className='box yellowbox' id='yellowbox4' />
          <div className='box' id='box4'>4</div>
          <div className='box' id='box65'>65</div>
          <div className='box yellowbox' id='yellowbox3' />
          <div className='box' id='box3'>3</div>
          <div className='box' id='box66'>66</div>
          <div className='box yellowbox' id='yellowbox2' />
          <div className='box' id='box2'>2</div>
          <div className='box' id='box66'>66</div>
          <div className='box yellowbox safe' id='yellowbox1'>68</div>
          <div className='box' id='box1'>1</div>
        </div>
        <div className='quadrant yellowbox' id='quadrant9' />
      </div>
    </div>
  )
}
