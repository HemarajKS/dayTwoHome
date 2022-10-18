import './homeBody.css'
import { useState, useEffect } from 'react'

const HomeBody = () => {
  const data = [
    {
      siteName: 'Facebook',
      url: 'www.facebook.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcdXYZ',
      notes: '',
      icon: require(`../../assets/icons/Facebook.png`),
    },
    {
      siteName: 'YouTube',
      url: 'www.youtube.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
      icon: require(`../../assets/icons/YouTube.png`),
    },
    {
      siteName: 'Linkdin',
      url: 'www.linkdin.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
      icon: require(`../../assets/icons/LinkdIn.png`),
    },
    {
      siteName: 'Facebook',
      url: 'www.facebook.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcdXYZ',
      notes: '',
      icon: require(`../../assets/icons/Facebook.png`),
    },
    {
      siteName: 'YouTube',
      url: 'www.youtube.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
      icon: require(`../../assets/icons/YouTube.png`),
    },
    {
      siteName: 'Linkdin',
      url: 'www.linkdin.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
      icon: require(`../../assets/icons/LinkdIn.png`),
    },
    {
      siteName: 'Facebook',
      url: 'www.facebook.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcdXYZ',
      notes: '',
      icon: require(`../../assets/icons/Facebook.png`),
    },
    {
      siteName: 'YouTube',
      url: 'www.youtube.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
      icon: require(`../../assets/icons/YouTube.png`),
    },
    {
      siteName: 'Linkdin',
      url: 'www.linkdin.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
      icon: require(`../../assets/icons/LinkdIn.png`),
    },
  ]

  if (localStorage.getItem('user Data') === null || 'undefined') {
    localStorage.setItem('user Data', JSON.stringify(data))
  }

  const previousData = JSON.parse(localStorage.getItem('user Data') || '[]')

  console.log(previousData)

  return (
    <div className="homeBodyContainer">
      <div className="homeBodyHeader">
        <div className="headerBodyTitle">Sites</div>
        <div className="headerBodyOptions">
          <div className="headerSearch">
            <input type="text" className="searchbar" placeholder="Search" />
            <img
              src={require('../../assets/icons/search.png')}
              alt="search"
              className="searchbarIcn"
            />
          </div>
          <div className="headerAddButton">
            <img src={require('../../assets/icons/add_btn.png')} alt="add" />
          </div>
        </div>
      </div>
      <div className="homeBodyCount">
        <div className="socialMedia">Social Media</div>
        <div className="socialMediaCount">{previousData.length}</div>
        <div className="socialMediaDropDown">
          <img src={require('../../assets/icons/Path Copy.png')} alt="add" />
        </div>
      </div>
      <div className="homeBodyContainerBox">
        <div className="homeBodyContents">
          {JSON.stringify(previousData) === '[]' ? (
            <div className="homeBodyEmpty">
              <div>Please Click on the “+” symbol to add sites</div>
            </div>
          ) : (
            <div className="cardContainer">
              {previousData.map((ele: any) => {
                return (
                  <div key={ele.siteName} className="cardContents">
                    <div className="cardUpper">
                      <div className="cardLogo">
                        {' '}
                        {ele.icon !== '' ? (
                          <img src={ele.icon} alt="" />
                        ) : (
                          <img
                            src={require('../../assets/icons/logo (2).png')}
                            height="50px"
                            style={{
                              backgroundPosition: 'cover',
                              borderRadius: '50%',
                            }}
                          />
                        )}
                      </div>

                      <div className="cardCopyTitle">
                        <div className="cardTitle"> {ele.siteName}</div>
                        <div className="cardCopy">
                          <img
                            src={require('../../assets/icons/copy.png')}
                            alt="copy"
                          />
                          <div>Copy Password</div>
                        </div>
                      </div>
                    </div>
                    <div className="cardLink">{ele.url}</div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomeBody
