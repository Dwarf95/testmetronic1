import {toAbsoluteUrl} from '../../../helpers'

export function FallbackView() {
  return (
    <div className='splash-screen'>
      <img src={toAbsoluteUrl('/media/logos/horizon.png')} alt='Start logo' style={{ width: '100px'}}/>
      <span>Loading ...</span>
    </div>
  )
}
