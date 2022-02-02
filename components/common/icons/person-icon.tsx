interface PersonIconProps {
  className?: string;
}

const PersonIcon = ({ className }: PersonIconProps) => (
  <svg
    width="50"
    viewBox="0 0 50 50"
    fill="white"
    fillRule="evenodd"
    clipRule="evenodd"
    className={className}
    aria-hidden
  >
    <circle cx="25.3462" cy="24.9619" r="24.5" fill="#FE5F1E" />
    <path d="M14.996 33.0908V34.1641H35.696V33.0643C35.696 33.0643 35.6958 33.0601 35.6956 33.0572C35.6945 33.0399 35.6916 33.0041 35.6845 32.9524C35.6703 32.8489 35.6394 32.6836 35.573 32.4768C35.4412 32.0665 35.1679 31.4859 34.5926 30.8886C33.4574 29.7099 30.9569 28.2816 25.4447 28.2816C19.9356 28.2816 17.3741 29.7088 16.1845 30.9025C15.5821 31.507 15.2859 32.0947 15.139 32.5094C15.0649 32.7183 15.0282 32.8851 15.0104 32.9895C15.0021 33.0376 14.998 33.0721 14.996 33.0908ZM36.846 33.05C37.996 33.05 37.996 33.0477 37.996 33.0477L37.996 33.0454L37.996 33.0402L37.9959 33.0281L37.9951 32.9973C37.9944 32.9738 37.9931 32.9445 37.9909 32.9098C37.9864 32.8404 37.9782 32.7491 37.963 32.6389C37.9328 32.4188 37.8746 32.1217 37.7628 31.7737C37.5383 31.0743 37.099 30.1753 36.2491 29.293C34.5341 27.5124 31.3339 25.9816 25.4447 25.9816C19.5526 25.9816 16.3147 27.5135 14.5553 29.279C13.6832 30.1541 13.2174 31.046 12.9711 31.7411C12.8485 32.087 12.7807 32.3826 12.7432 32.6019C12.7245 32.7116 12.7132 32.8026 12.7065 32.8718C12.7031 32.9064 12.7008 32.9356 12.6993 32.9591L12.6976 32.9898L12.697 33.0019L12.6968 33.007L12.6968 33.0094C12.6968 33.0094 12.6967 33.0116 13.846 33.05L12.6967 33.0116C12.6963 33.0244 12.696 33.0372 12.696 33.05V35.3141C12.696 35.9493 13.2109 36.4641 13.846 36.4641H36.846C37.4812 36.4641 37.996 35.9493 37.996 35.3141V33.05H36.846Z" />
    <path d="M25.3461 24.2405C28.5218 24.2405 31.0961 21.6661 31.0961 18.4905C31.0961 15.3148 28.5218 12.7405 25.3461 12.7405C22.1705 12.7405 19.5961 15.3148 19.5961 18.4905C19.5961 21.6661 22.1705 24.2405 25.3461 24.2405ZM25.3461 21.9405C27.2515 21.9405 28.7961 20.3959 28.7961 18.4905C28.7961 16.5851 27.2515 15.0405 25.3461 15.0405C23.4408 15.0405 21.8961 16.5851 21.8961 18.4905C21.8961 20.3959 23.4408 21.9405 25.3461 21.9405Z" />
  </svg>
);

export default PersonIcon;
export type { PersonIconProps };