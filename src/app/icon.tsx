
import { ImageResponse } from 'next/og'


export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'


export default function Icon() {
  return new ImageResponse(
    (
      
      <div
        style={{
          fontSize: 18,
          background: '#0a192f', 
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#D4AF37',      
          borderRadius: '4px',   
          fontWeight: 700,
          fontFamily: 'sans-serif',
          border: '2px solid #D4AF37' 
        }}
      >
        RM
      </div>
    ),
   
    {
      ...size,
    }
  )
}