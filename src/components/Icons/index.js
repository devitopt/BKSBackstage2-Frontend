const FOCUS_STATE = "#6A4DFD";
const NONE_STATE = "white";

const TwitterIcon = ({ color, className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 3.01006C22.0424 3.68553 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61514 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 22.6608 4.40277 23 3.01006V3.01006Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MediumIcon = ({ color, className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.86466 4.36903L1.86468 4.36906L3.11143 5.72393L3.24219 5.86603L3.24349 6.05913L3.27799 11.1841C3.2875 12.5955 3.28626 13.9078 3.27657 14.8854C3.27173 15.3739 3.26476 15.781 3.25587 16.0761C3.25144 16.2231 3.24644 16.3459 3.24072 16.4385C3.23789 16.4843 3.23461 16.5274 3.23058 16.5645L3.23027 16.5674C3.228 16.5888 3.22047 16.6599 3.19655 16.7281C3.16794 16.8096 3.12067 16.8823 3.09778 16.917C3.06634 16.9648 3.02789 17.0181 2.98594 17.0737C2.9015 17.1858 2.78939 17.3251 2.65935 17.4809C2.39849 17.7934 2.05362 18.1862 1.68664 18.5855C1.34368 18.9586 1.03295 19.3195 0.804965 19.6037C1.31345 19.6222 2.17186 19.625 3.625 19.625C4.93169 19.625 5.79654 19.6174 6.34726 19.5978C6.10143 19.304 5.78295 18.9386 5.43511 18.5545L3.99224 16.961L3.86247 16.8177L3.86288 16.6243L3.87175 12.4131C3.87413 11.2542 3.87954 10.1971 3.88632 9.42743C3.8897 9.04279 3.89344 8.72883 3.89733 8.50947C3.89927 8.40019 3.90129 8.31218 3.90339 8.24995C3.90442 8.21955 3.90561 8.19114 3.90708 8.1681C3.90774 8.15772 3.90891 8.14104 3.91103 8.12325C3.91193 8.1157 3.91426 8.09678 3.91913 8.0738C3.92139 8.06313 3.92669 8.03946 3.93682 8.01058C3.93691 8.01032 3.93704 8.00993 3.93722 8.0094C3.94166 7.9962 3.97371 7.90085 4.06124 7.81612C4.21125 7.67092 4.39754 7.66059 4.51744 7.68717C4.61541 7.70888 4.68096 7.75464 4.70329 7.77085C4.7528 7.80678 4.78436 7.84412 4.79181 7.85294L4.79232 7.85354C4.81296 7.87792 4.82744 7.89986 4.8315 7.90601L4.83169 7.9063C4.8431 7.92359 4.85343 7.94114 4.86009 7.95263C4.87512 7.97854 4.89424 8.01314 4.91587 8.05301C4.9599 8.13417 5.02264 8.25253 5.10133 8.40265C5.25907 8.7036 5.48474 9.13948 5.76136 9.67724C6.31477 10.7531 7.07388 12.2402 7.90516 13.8791L7.45925 14.1052L7.90517 13.8791L10.8015 19.589L10.9416 19.6015L10.9993 19.6066L13.4055 14.0872L13.8639 14.287L13.4055 14.0872C14.107 12.4783 14.7562 10.9943 15.2371 9.89961C15.4775 9.35231 15.676 8.90192 15.818 8.58168C15.9519 8.27968 16.0497 8.06056 16.0761 8.0118C16.0904 7.98543 16.1438 7.88877 16.2603 7.81857C16.3275 7.77803 16.4194 7.74455 16.5286 7.7465C16.6372 7.74844 16.7263 7.78478 16.7899 7.82534C16.9004 7.89586 16.9511 7.98919 16.9649 8.01509C16.9851 8.0531 16.9966 8.08615 17.0022 8.10382C17.0216 8.16433 17.0293 8.22609 17.0325 8.2519C17.0414 8.32404 17.0485 8.42431 17.0548 8.53984C17.0675 8.7763 17.0789 9.12506 17.0884 9.5569C17.1076 10.4225 17.1199 11.6396 17.1209 12.9997L17.1244 17.9371L17.1245 18.1663L16.951 18.316L15.8888 19.2326C15.7295 19.3702 15.5793 19.5059 15.4464 19.6313C16.1083 19.6495 17.256 19.651 19.2497 19.6497C21.2515 19.6484 22.3999 19.6463 23.0604 19.6293C22.9502 19.5235 22.8283 19.4108 22.6997 19.2969C22.4311 19.059 22.1756 18.8277 21.98 18.6462C21.8825 18.5558 21.7981 18.4761 21.7338 18.4134C21.6863 18.3671 21.6099 18.2926 21.5664 18.2329C21.5178 18.1662 21.4975 18.1028 21.4923 18.0866L21.4921 18.086C21.4839 18.0602 21.4789 18.0381 21.4762 18.0247C21.4705 17.9973 21.467 17.9713 21.4648 17.9527C21.4601 17.9135 21.4564 17.8667 21.4532 17.8176C21.4467 17.7175 21.4407 17.5796 21.4351 17.4111C21.4239 17.0729 21.4138 16.5949 21.4053 16.0138C21.3883 14.8507 21.3774 13.2654 21.3769 11.5383L21.375 5.2639L21.3749 5.03759L21.5449 4.88819L22.5761 3.98183C22.5762 3.98183 22.5762 3.98182 22.5762 3.98182C22.7587 3.82138 22.9309 3.66082 23.0793 3.51471C22.595 3.50195 21.8326 3.5 20.6338 3.5C19.6611 3.5 18.8212 3.512 18.2268 3.532C17.9761 3.54043 17.7735 3.55015 17.6249 3.56058C17.6127 3.59092 17.5997 3.62262 17.5862 3.65536C17.5053 3.8502 17.3953 4.09905 17.2753 4.35648C17.024 4.89534 16.0424 7.09225 15.1045 9.20481C14.6361 10.2596 14.1797 11.2911 13.8322 12.0806C13.6584 12.4754 13.5121 12.8092 13.4052 13.0549C13.3518 13.1779 13.3085 13.2781 13.2767 13.3526C13.2668 13.3759 13.2581 13.3964 13.2507 13.4141C13.2462 13.4247 13.2422 13.4343 13.2386 13.4428L13.2274 13.4702C13.2246 13.4771 13.2235 13.4801 13.2234 13.4804L13.2233 13.4804M1.86466 4.36903L12.2868 13.1298L12.2869 13.1296M1.86466 4.36903C1.58341 4.06343 1.32498 3.76902 1.1204 3.52431C1.64079 3.50573 2.47429 3.5 3.78937 3.5H7.01162L7.09732 3.68186C7.22311 3.94886 8.42916 6.33271 9.77194 8.96939M1.86466 4.36903L10.2175 8.7425M13.2233 13.4804L12.7551 13.305M13.2233 13.4804C13.2234 13.4803 13.2234 13.4803 13.2234 13.4802L12.7551 13.305M13.2233 13.4804C13.1864 13.5791 13.069 13.7841 12.8018 13.8198C12.5943 13.8475 12.4472 13.7439 12.4085 13.7158C12.3094 13.6438 12.232 13.5405 12.1841 13.4735C12.0698 13.3138 11.9168 13.0573 11.7198 12.7031C11.321 11.986 10.6998 10.7914 9.77194 8.96939M12.7551 13.305C12.7711 13.2623 12.8363 13.1095 12.9394 12.8724C12.9704 12.8878 12.9898 12.9021 12.9956 12.9063L12.9965 12.9069C13.0195 12.9237 13.0318 12.9369 13.0319 12.9368C13.0319 12.9367 13.0208 12.9245 12.9973 12.8915C12.985 12.8745 12.9716 12.8548 12.9567 12.8325M12.7551 13.305L12.9567 12.8325M9.77194 8.96939C9.77195 8.9694 9.77195 8.9694 9.77195 8.96941L10.2175 8.7425M9.77194 8.96939L10.2175 8.7425M10.2175 8.7425C11.3594 10.9849 12.0305 12.2645 12.394 12.8745C12.3361 13.0091 12.299 13.0973 12.2869 13.1296M12.2869 13.1296C12.3035 13.0853 12.3462 13.0012 12.4288 12.9323L12.2869 13.1296ZM12.9567 12.8325C13.7213 11.0752 16.38 5.09315 16.8221 4.14513C17.0575 3.6405 17.25 3.1765 17.25 3.11388C17.25 3.04813 18.682 3 20.6338 3L12.9567 12.8325ZM16.0382 8.36211C16.0382 8.36181 16.0385 8.36306 16.0389 8.36616C16.0385 8.36378 16.0383 8.36237 16.0382 8.36211ZM17.75 3.11388C17.75 3.13687 17.7485 3.15884 17.7458 3.17979C17.7483 3.15911 17.75 3.13681 17.75 3.11388Z"
      stroke={color}
    />
  </svg>
);

const FaceBookIcon = ({ color, className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="crispEdges"
    />
  </svg>
);

const InstagramIcon = ({ color, className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7977 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 6.5H17.51"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GithubIcon = ({ color, className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22M9 19C4 20.5 4 16.5 2 16L9 19Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TelegramIcon = ({ color, className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.8359 3.24449L20.8359 3.2445C20.0008 3.56575 18.6717 4.07568 17.8823 4.37777C17.0932 4.67977 16.0923 5.06344 15.658 5.2304C15.2231 5.39762 13.8567 5.92173 12.6215 6.39508C10.2722 7.29548 6.6733 8.67517 4.8653 9.36857C4.2818 9.59236 3.20552 10.0043 2.47341 10.2841C2.11 10.423 1.75316 10.5633 1.47159 10.6771C1.33066 10.734 1.20993 10.7838 1.11728 10.8232C1.07089 10.8429 1.03289 10.8595 1.00361 10.8726C0.989007 10.8792 0.97746 10.8845 0.968693 10.8887C0.959969 10.8928 0.956141 10.8948 0.95583 10.8949L0.955813 10.8949L0.955709 10.895C0.655671 11.0527 0.533415 11.213 0.514996 11.2611C0.51427 11.263 0.51357 11.2648 0.512894 11.2666C0.522294 11.2784 0.535258 11.2929 0.552325 11.3095C0.601908 11.3577 0.670374 11.4078 0.746781 11.447M20.8359 3.24449L0.746781 11.447M20.8359 3.24449C21.6769 2.92098 22.4763 2.62088 22.622 2.57277M20.8359 3.24449L22.622 2.57277M0.746781 11.447C0.740495 11.4437 0.743581 11.4449 0.760833 11.4512M0.746781 11.447L0.760833 11.4512M22.622 2.57277C22.684 2.55235 22.7577 2.53256 22.824 2.51813C22.8568 2.51099 22.8844 2.5059 22.9052 2.50275C22.9169 2.50099 22.9236 2.50027 22.9262 2.50001C23.1646 2.49905 23.3527 2.62333 23.4446 2.83218C23.4715 2.89335 23.4804 2.92491 23.4865 2.96339C23.4946 3.01387 23.4996 3.0901 23.5 3.2471C23.5006 3.49786 23.4755 3.70001 23.3599 4.21835C23.2752 4.59827 23.0826 5.48918 22.932 6.19879C22.7814 6.90771 22.5105 8.18019 22.33 9.02639C21.9319 10.8926 21.5238 12.8075 21.2442 14.1213C21.1298 14.6587 20.8606 15.9219 20.646 16.9283M22.622 2.57277L20.646 16.9283M2.44661 12.0015L2.44662 12.0015L5.26387 12.8806L5.26388 12.8806L6.24671 13.1871C6.46653 13.0507 7.23391 12.5705 8.1012 12.0265C9.08486 11.4095 10.9751 10.2245 12.3019 9.39316L12.3019 9.39315C13.6285 8.56186 15.5187 7.37691 16.5021 6.75999C17.6852 6.01791 18.3035 5.63061 18.649 5.42678C18.8193 5.32629 18.9431 5.25838 19.0447 5.21435C19.1679 5.1609 19.2555 5.14388 19.337 5.13294C19.4845 5.11316 19.6704 5.10428 19.8434 5.16187C19.9364 5.19283 20.0512 5.25162 20.1436 5.3634C20.2417 5.48195 20.283 5.62223 20.283 5.75485C20.283 5.84671 20.2643 5.93109 20.2432 5.99577C20.2235 6.05652 20.1869 6.14574 20.1205 6.22818L2.44661 12.0015ZM2.44661 12.0015C2.00333 11.8632 1.58339 11.7286 1.26437 11.6234M2.44661 12.0015L1.26437 11.6234M15.5487 19.7435C14.0547 18.649 12.8101 17.7624 12.783 17.7731C12.7559 17.7838 12.2576 18.2485 11.6756 18.8058C10.1369 20.2792 9.76836 20.6383 9.51113 20.7394L9.52228 20.6387L19.2072 22.0441C18.9801 22.0441 18.5627 21.9235 18.375 21.8036C18.3145 21.765 17.0427 20.838 15.5487 19.7435ZM15.5487 19.7435L15.8442 19.3401C16.5909 19.8872 17.282 20.3924 17.7939 20.7655C18.0499 20.9521 18.2608 21.1054 18.4113 21.2144C18.5733 21.3318 18.6452 21.3829 18.644 21.3822L18.6441 21.3822C18.679 21.4045 18.7774 21.4487 18.9151 21.4884C19.0521 21.528 19.1615 21.5441 19.2072 21.5441C19.3278 21.5441 19.4485 21.4911 19.5363 21.391L19.5364 21.3909C19.6786 21.229 19.7696 21.0511 20.0219 19.8609C20.1505 19.2545 20.4313 17.9348 20.646 16.9283M15.5487 19.7435L15.8441 19.3401C15.0959 18.792 14.4094 18.2954 13.9059 17.9366C13.6544 17.7575 13.4469 17.6115 13.2994 17.5103C13.2263 17.4601 13.1645 17.4186 13.1182 17.3889C13.0962 17.3748 13.0711 17.359 13.0473 17.3457C13.037 17.3399 13.0155 17.328 12.9893 17.3165C12.9775 17.3114 12.9496 17.2995 12.9128 17.2898C12.8945 17.285 12.8613 17.2772 12.819 17.2742C12.7832 17.2717 12.6979 17.269 12.599 17.3082C12.5424 17.3306 12.5009 17.3598 12.4957 17.3635L12.4952 17.3638C12.4819 17.373 12.471 17.3813 12.4645 17.3864C12.4509 17.3971 12.4376 17.4082 12.4268 17.4175C12.4043 17.4367 12.3764 17.4614 12.3455 17.4893C12.2828 17.5459 12.1975 17.6245 12.0964 17.7188C11.8936 17.9079 11.6219 18.165 11.3298 18.4447C11.2787 18.4936 11.229 18.5412 11.1806 18.5875C10.2854 19.4448 9.83378 19.8773 9.56439 20.1034C9.60232 19.5884 9.66005 18.7684 9.7195 17.8985C9.76637 17.2128 9.81089 16.5799 9.84486 16.1128C9.86185 15.8791 9.87615 15.6875 9.88677 15.5517C9.88849 15.5297 9.8901 15.5093 9.89161 15.4905C9.96638 15.4152 10.0774 15.3078 10.2194 15.1737C10.5031 14.9057 10.8997 14.5411 11.3518 14.1342L11.3518 14.1342C13.3675 12.3199 18.0885 8.07646 19.181 7.09704L19.1811 7.09703C19.4108 6.89103 19.626 6.69608 19.7879 6.54772C19.8686 6.47368 19.9371 6.41033 19.9878 6.36263C20.013 6.33896 20.0352 6.31777 20.053 6.30043L20.0547 6.29878C20.0647 6.28909 20.0956 6.25898 20.1202 6.22845L20.646 16.9283M1.26437 11.6234C1.10462 11.5708 0.971787 11.526 0.874618 11.4921M1.26437 11.6234L0.874618 11.4921M0.874618 11.4921C0.815543 11.4715 0.779709 11.4582 0.760833 11.4512M0.874618 11.4921L0.760833 11.4512"
      stroke={color}
    />
  </svg>
);

const MailIcon = ({ color, className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6L12 13L2 6"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {
  TwitterIcon,
  MediumIcon,
  FaceBookIcon,
  InstagramIcon,
  GithubIcon,
  TelegramIcon,
  MailIcon,
  FOCUS_STATE,
  NONE_STATE,
};
