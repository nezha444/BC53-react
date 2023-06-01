import { Audio } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        background: "rgba(0, 0, 0, 0.6)"
    }}>
        <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
  /></div>
  )
}

