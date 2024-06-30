interface SvgProps {
  className?: string
}

export const LeagueGradientIcon = (props: SvgProps) => {
  const { className } = props

  return (
    <svg
      className={className}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1413_20967)">
        <path
          clipRule="evenodd"
          d="M9.9109 3.122C9.18804 2.554 7.71287 1.6 6.00002 1.6C5.46642 1.60468 4.9366 1.69167 4.4286 1.858C4.3998 1.31282 4.21398 0.788343 3.89431 0.35C4.57405 0.122474 5.28451 0.00438529 6.00002 0C9.14287 0 11.5 2.4 11.5 2.4C11.5 10.4 6.00002 12 6.00002 12C6.00002 12 1.64128 10.726 0.686645 4.8H2.28164C4.40854 4.83078 6.43911 5.70803 7.93876 7.244L8.56537 7.882C9.24894 6.784 9.80679 5.248 9.9109 3.122ZM6.82894 8.374C5.7308 7.25049 4.27673 6.5602 2.72557 6.426C3.62521 8.848 5.21431 9.894 6.00002 10.278C6.58075 9.98503 7.11135 9.59875 7.57144 9.134L6.82894 8.374Z"
          fill="url(#paint0_linear_1413_20967)"
          fillRule="evenodd"
        />
        <path
          d="M2.85713 2C2.85713 2.66274 2.32947 3.2 1.67857 3.2C1.02766 3.2 0.5 2.66274 0.5 2C0.5 1.33726 1.02766 0.8 1.67857 0.8C2.32947 0.8 2.85713 1.33726 2.85713 2Z"
          fill="url(#paint1_linear_1413_20967)"
        />
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1413_20967" x1="11.5" x2="0.5" y1="0" y2="12">
          <stop stopColor="#FFC89A" />
          <stop offset="1" stopColor="#99785C" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1413_20967" x1="11.5" x2="0.5" y1="0" y2="12">
          <stop stopColor="#FFC89A" />
          <stop offset="1" stopColor="#99785C" />
        </linearGradient>
        <clipPath id="clip0_1413_20967">
          <rect fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </svg>
  )
}
