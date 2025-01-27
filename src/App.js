import React, { useState, useEffect } from 'react';
import './App.css';
import { TbEdit } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";
import { MdViewCarousel } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsPostcardFill } from "react-icons/bs";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaTachometerAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { FaMobileAlt } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { GoBold } from "react-icons/go";
import { MdFormatItalic } from "react-icons/md";
import { TbUnlink } from "react-icons/tb";
import { MdEmojiEmotions } from "react-icons/md";
import { IoIosCopy } from "react-icons/io";
import { MdWallpaper } from "react-icons/md";
import { BiPaperclip } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { LiaShareSolid } from "react-icons/lia";
import { BsSend } from "react-icons/bs";
import { FaUnderline } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io"; 
import { RxMixerVertical } from "react-icons/rx";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { GrBold } from "react-icons/gr";

function App() {
  const [content, setContent] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const [selectionStart, setSelectionStart] = useState(null);
  const [selectionEnd, setSelectionEnd] = useState(null);
  const [lastUpdated, setLastUpdated] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const currentDateTime = new Date().toLocaleString();
    setLastUpdated(currentDateTime);
    setWordCount(content.trim().split(/\s+/).length);
  }, [content]);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSelectText = (event) => {
    const { selectionStart, selectionEnd } = event.target;
    if (selectionStart !== selectionEnd) {
      setSelectionStart(selectionStart);
      setSelectionEnd(selectionEnd);
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  };

  const handleUnderline = () => {
    const before = content.slice(0, selectionStart);
    const selected = content.slice(selectionStart, selectionEnd);
    const after = content.slice(selectionEnd);

    setContent(before + '<u>' + selected + '</u>' + after);
    setShowTooltip(false);
  };

  const insertHeadline = (index) => {
    const before = content.slice(0, index);
    const after = content.slice(index);

    setContent(before + '\n<h4>New Headline</h4>\n' + after);
  };
  const handleClick = (index) => {
    setSelected(index);
  };
  return (
    <>
      <div className='container'>
        <div className='left'>
          <div className='sidebar1'>
            <div className='wp'><TbEdit size={20} />&nbsp;&nbsp;Write Post</div>
            <div className='options'><BsStars size={20}/>&nbsp;&nbsp;&nbsp;Post Generator</div>
            <div className='options'><TbBulbFilled size={20}/>&nbsp;&nbsp;&nbsp;Ideas Generator</div>
            <div className='options'><MdViewCarousel size={20}/>&nbsp;&nbsp;&nbsp;Coruosal Maker</div>
            <div className='options'><FaCopy />&nbsp;&nbsp;&nbsp;Posts</div>
            <div className='options'><FaArrowTrendUp />&nbsp;&nbsp;&nbsp;Content Inspiration</div>
            <div className='options'><BsPostcardFill />&nbsp;&nbsp;&nbsp;Posts for You</div>
            <div className='options'><RiCalendarScheduleFill />&nbsp;&nbsp;&nbsp;Schedule</div>
          </div>
          <div>
            <div className='options'><RxMixerVertical />&nbsp;&nbsp;&nbsp;Preferences</div>
            <div className='options'><BsFillPlusCircleFill />&nbsp;&nbsp;&nbsp;Feature request</div>
            <div className='wg'>
              <div className='flex wgd'><div className='flex'>Words generated &nbsp;<BsInfoCircleFill /></div><div>1.25k/50k</div></div>
              <div className='flbr'><div className='hbr'></div></div>
              <div className='mu'>Monthly uses resets in 29 days</div>
              <div className='up'><AiFillThunderbolt size={15}/>&nbsp;Upgrade Plan</div>
            </div>
          </div>
          
          
        </div>
        <div className='mid'>
          <div className='header'>
            <div className='wph'>Write Post</div>
            <div className='user'>
              <div className='cs'><FaTachometerAlt />&nbsp;&nbsp;&nbsp;Check Score</div>
              <div className='flex'><FaUserCircle size={30} /><HiMiniChevronUpDown size={20} /></div>
            </div>
          </div>
          <div className='midbody'>
            <div className='actions'>
              <div className='ac1'>
                <GoBold size={20} />
                <MdFormatItalic size={20} />
                <TbUnlink size={20} />
                <MdEmojiEmotions size={20} />
                <div className='ai'><BsStars /></div>
              </div>
              <div className='ac2'>
                <IoIosCopy size={20} />
                <MdWallpaper size={20} />
                <BiPaperclip size={20} style={{ transform: 'rotate(-90deg)' }} />
              </div>
            </div>
            <div className='contentinput'>
              <textarea
                className='ph'
                placeholder='Enter Content'
                value={content}
                onChange={handleContentChange}
                onSelect={handleSelectText}
              />
              {showTooltip && (
                <div className='tooltip'>
                  <div><GrBold size={20} className='hover'/></div>
                  <div><MdFormatItalic size={20} className='hover'/></div>
                  <div onClick={handleUnderline}><FaUnderline size={15} className='hover'/></div>
                  <div onClick={() => setShowTooltip(false)}><IoClose className='hover' size={20} color='rgb(121, 121, 121)'/></div>
                </div>
              )}
              <div className='plus-icon' onClick={() => insertHeadline(content.length)}>
                <IoMdAdd size={20} /> Add Headline
              </div>
            </div>
            <div className='binfo'>
              <div>Last Updated at {lastUpdated}</div>
              <div>{wordCount} words</div>
            </div>
            <div className='baction'>
              <div className='draft'>Save as Draft</div>
              <div className='flex'>
                <div className='schd'> <RiCalendarScheduleFill />&nbsp;Schedule</div>
                <div className='publish'>Publish&nbsp;<IoSend /></div>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='header rr'>
            <div className='pp'>Post Preview</div>
            <div className='flex dvs'>Devices:
              <div className={selected === 0 ? 'sd' : 'icon'} onClick={() => handleClick(0)}><FaMobileAlt size={20} /></div>
              <div className={selected === 1 ? 'sd' : 'icon'} onClick={() => handleClick(1)}><FaTabletAlt size={20} /></div>
              <div className={selected === 2 ? 'sd' : 'icon'} onClick={() => handleClick(2)}><IoDesktopOutline size={20} /></div>
            </div>
          </div>
          <div className='rbody'>
            <div className='ct'>Copy Text</div>
            <div className='preview'>
              {/*  */}
              <div className="post-container">
                <div className="post-header">
                  <div className="user-details">
                    <div className="user-avatar"></div>
                    <div>
                      <div className="user-name">Ankit Anand</div>
                      <div className='userabout'>Web Developer | UI/UX | Andriod</div>
                      <div className="post-time">Now</div>
                    </div>
                  </div>
                </div>
                <div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />
                <div className="post-footer">
                  <div className="post-stats">
                    <div className='flex'><span className='emojis'>😊👌😍❤️</span><span>&nbsp;34</span></div>
                    <div>
                      <span>55 Comments .</span>
                      <span>&nbsp;23 Shares</span>
                    </div>
                  </div>
                  <div className="post-actions">
                    <button className="like-button"><div className='flex'><AiOutlineLike size={20} />&nbsp;Like</div></button>
                    <button className="comment-button"><div className='flex'><AiOutlineComment size={20} />&nbsp;Comment</div></button>
                    <button className="share-button"><div className='flex'><LiaShareSolid size={20} />&nbsp;Share</div></button>
                    <button className="more-button"><div className='flex'><BsSend size={20} />&nbsp;Sent</div></button>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
