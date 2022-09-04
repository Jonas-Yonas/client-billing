interface ITickMark {
  fillColor: string;
}

export const IconTickMark = (props: ITickMark) => {
  const { fillColor } = props;

  return (
    <svg
      width="9"
      height="7"
      viewBox="0 0 9 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.89062 1.21094L8.35938 0.679688C8.32292 0.643229 8.28125 0.614583 8.23438 0.59375C8.19271 0.572917 8.14583 0.5625 8.09375 0.5625C8.04167 0.5625 7.99219 0.572917 7.94531 0.59375C7.89844 0.614583 7.85677 0.643229 7.82031 0.679688L3.89062 4.625L2.15625 2.89062C2.125 2.85417 2.08594 2.82812 2.03906 2.8125C1.99219 2.79167 1.94271 2.78125 1.89062 2.78125C1.83854 2.78125 1.78906 2.79167 1.74219 2.8125C1.70052 2.82812 1.66146 2.85417 1.625 2.89062L1.09375 3.42188C1.05729 3.45833 1.02865 3.5 1.00781 3.54688C0.986979 3.58854 0.976562 3.63542 0.976562 3.6875C0.976562 3.73958 0.986979 3.78906 1.00781 3.83594C1.02865 3.88281 1.05729 3.92448 1.09375 3.96094L3.36719 6.21094C3.4349 6.27865 3.51302 6.33333 3.60156 6.375C3.6901 6.41146 3.78646 6.42969 3.89062 6.42969C3.99479 6.42969 4.09115 6.41146 4.17969 6.375C4.27344 6.33333 4.35417 6.27865 4.42188 6.21094L8.89062 1.74219C8.92708 1.70573 8.95312 1.66406 8.96875 1.61719C8.98958 1.57031 9 1.52083 9 1.46875C9 1.41667 8.98958 1.36979 8.96875 1.32812C8.95312 1.28125 8.92708 1.23958 8.89062 1.20312V1.21094Z"
        fill={fillColor}
      />
    </svg>
  );
};