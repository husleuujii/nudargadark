import getConfig from 'next/config'
const {
  publicRuntimeConfig: { FACEBOOK_APP_ID }
} = getConfig()

function ShareButton ({ url }) {
  return (
    <div className="flex">
    <a
      target='_blank'
      className='flex items-center py-1 text-gray-600 bg-blue-600 rounded'
      href={`https://www.facebook.com/dialog/share?app_id=${FACEBOOK_APP_ID}&display=popup&href=${encodeURIComponent(
        url
      )}`}
      onClick={event => {
        event.preventDefault()
        window.open(
          `https://www.facebook.com/dialog/share?app_id=${FACEBOOK_APP_ID}&display=popup&href=${encodeURIComponent(
            url
          )}`,
          '_blank',
          'location=yes,height=760,width=600,scrollbars=yes,status=yes'
        )
      }}
    >
      <i className="ml-3 fa fa-facebook-f"></i>
     <span className="mx-3 text-sm text-white">Хуваалцах</span>
    </a>
    </div>
  )
}

export default ShareButton
