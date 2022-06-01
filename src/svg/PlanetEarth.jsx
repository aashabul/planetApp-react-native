import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => {
  return (
    <Svg
      height={300}
      width={300}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1200"
      xmlSpace="preserve"
      {...props}
    >
      <Path
        fill="#7FDF8D"
        d="M1128.834 505.774c-22.942-16.635-72.27-49.471-99.705-45.846-6.7.887-11.938 3.782-15.563 8.603-3.037 4.034-4.278 8.747-3.584 13.628 2.133 15.008 22.384 30.19 45.834 47.771 26.881 20.155 57.351 42.999 57.351 63.927 0 10.073-3.141 18.061-9.601 24.426-15.971 15.732-46.434 15.449-46.787 15.454-.106 0-.204-.003-.307.003-14.643.441-26.132 12.2-26.263 26.823l-9.715 133.486a5.655 5.655 0 0 0-.018.469c0 60.517-32.255 121.782-93.903 121.782-59.677 0-93.903-36.343-93.903-99.711V715.044c0-44.833-36.474-81.307-81.307-81.307h-19.102c-43.409 0-78.726-35.317-78.726-78.728v-22.844c0-43.41 35.317-78.726 78.726-78.726h212.923c11.182 0 22.021-4.654 29.747-12.777 7.3-7.703 11.32-17.685 11.32-28.108 0-19.729-13.448-36.306-32.703-40.311l-37.127-7.741a24.566 24.566 0 0 0-21.423 5.752l-21.655 19.513c-3.012 2.711-6.972 3.647-10.892 2.562-3.899-1.085-6.813-3.928-7.993-7.808l-.854-2.801c-3.552-11.537-14.802-18.731-26.75-17.119l-20.856 2.813a24.83 24.83 0 0 0-6.763 1.93l-55.085 24.753a28.797 28.797 0 0 1-24.418-.355 28.852 28.852 0 0 1-15.437-18.969 29.253 29.253 0 0 1-.89-7.079c0-13.399 9.12-24.946 22.172-28.079l26.293-6.277c7.829-1.888 13.808-7.64 15.994-15.385 2.185-7.741.098-15.764-5.609-21.49l-2.939-2.911a9.032 9.032 0 0 1-2.599-7.326 8.983 8.983 0 0 1 4.013-6.613l50.126-33.143c4.6-3.041 10.352-3.436 15.399-1.042 7.043 3.316 17.362 7.677 30.672 12.963 21.849 8.683 46.703 1.425 60.471-17.655.166-.219.315-.439.461-.671 4.484-6.342 6.171-14.035 4.744-21.688-1.447-7.749-5.878-14.389-12.485-18.702l-25.812-16.831c-3.733-2.431-6.186-6.197-6.907-10.601-.721-4.4.401-8.743 3.156-12.232 2.992-3.789 7.487-5.961 12.334-5.961 3.307 0 6.473 1.023 9.155 2.959a6.382 6.382 0 0 0 3.38 1.195c117.783 81.558 198.546 207.415 223.41 347.57zM583.997 119.02H479.303a16.627 16.627 0 0 0-10.932 4.111 16.653 16.653 0 0 0-5.49 10.278c-1.2 8.984 5.142 17.325 14.144 18.583l29.265 4.078c11.267 1.582 20.713 9.635 24.068 20.52l20.108 65.121c2.15 6.992 8.507 11.686 15.825 11.686h1.601c8.195 0 15.076-5.876 16.367-13.972l16.107-101.234a16.568 16.568 0 0 0-3.761-13.365 16.557 16.557 0 0 0-12.608-5.806zM102.084 399.021l23.679 71.173c2.662 8.008 3.968 16.966 5.233 25.627 2.438 16.708 4.741 32.49 15.825 39.914 18.038 12.07 54.414 12.363 78.487 12.556 4.421.037 8.497.069 12.077.165 20.418.552 30.5 17.702 31.229 33.402.693 14.924-6.776 26.302-18.162 27.673l-19.306 2.322a8.43 8.43 0 0 0-7.406 8.359l-.025 77.257c0 44.831 36.474 81.305 81.307 81.305h16.211c11.812 0 21.423 9.611 21.423 21.423v271.28c7.526 4.133 15.122 8.098 22.668 11.752l18.392 5.645c2.339-.166 4.129-1.023 5.586-2.662 4.623-5.2 6.125-17.935 4.119-34.934-2.339-19.767 1.505-39.219 11.111-56.249.086-.151.176-.297.272-.441l67.214-99.53c8.031-11.857 14.083-25.101 17.995-39.368 5.782-21.138 13.493-45.13 31.894-62.279l64.893-60.476a39.889 39.889 0 0 0 6.133-51.276l-8.182-12.414c-9.632-14.615-27.589-21.925-44.674-18.182l-45.917 10.068c-10.325 2.266-20.929-3.491-24.645-13.415L465.3 636.34c-6.488-17.357-23.294-28.428-41.849-27.647l-77.405 3.509c-6.982.363-13.68-2.783-17.97-8.333l-62.571-85.063c-13.566-15.06-18.875-32.614-14.204-47.018 3.287-10.136 11.262-17.444 21.33-19.548 13.69-2.86 29.051 3.989 42.174 18.784 8.301 9.35 14.088 19.453 14.333 19.878.05.091.101.183.146.276a8.458 8.458 0 0 0 4.961 4.244 8.39 8.39 0 0 0 6.476-.513l37.596-19.159c1.664-.855 3.025-2.242 3.816-3.9l46.025-96.026a40.198 40.198 0 0 1 19.351-19.046l45.073-20.757a45.12 45.12 0 0 0 24.627-28.91 45.074 45.074 0 0 0-6.105-37.446l-7.799-11.542c-6.937-10.237-17.471-17.049-29.658-19.174-12.175-2.126-24.383.717-34.37 7.997l-56.451 41.17c-7.076 5.151-15.429 7.872-24.166 7.872-13.095 0-25.514-6.297-33.218-16.843a41.19 41.19 0 0 1-7.038-32.605 41.17 41.17 0 0 1 19.435-27.074l4.184-2.453a29.649 29.649 0 0 0 14.131-19.995 29.647 29.647 0 0 0-5.712-23.804l-12.339-15.877c-5.944-7.672-15.416-11.924-25.042-11.401-94.402 59.751-169.267 149.36-211.094 252.655.04.142.069.285.117.43zM498.14 554.873c3.66-3.663 5.684-8.56 5.684-13.777 0-10.746-8.742-19.487-19.487-19.487h-43.958c-5.198 0-10.098 2.028-13.798 5.711a19.43 19.43 0 0 0-5.689 13.777c0 10.746 8.742 19.489 19.487 19.489h43.958c5.195-.001 10.098-2.03 13.803-5.713z"
      />
      <Path
        fill="#338891"
        d="M1131.738 524.05c-20.623-15.962-76.644-54.567-100.915-51.327-4.242.561-5.994 2.305-6.944 3.567-.998 1.328-1.333 2.54-1.119 4.055 1.381 9.707 22.321 25.409 40.797 39.26 29.303 21.969 62.516 46.87 62.516 74.253 0 13.539-4.54 24.864-13.493 33.661-19.361 19.024-52.725 19.117-55.846 19.127a14.107 14.107 0 0 0-13.619 14.166c0 .156-.005.313-.018.469l-9.715 133.473c-.086 66.856-36.769 134.451-106.809 134.451-66.882 0-106.809-42.101-106.809-112.617V715.044c0-37.717-30.684-68.402-68.402-68.402H732.26c-50.527 0-91.632-41.107-91.632-91.633v-22.844c0-50.526 41.105-91.632 91.632-91.632h212.923c7.663 0 15.094-3.192 20.387-8.758 5.082-5.363 7.774-12.012 7.774-19.222 0-13.549-9.223-24.93-22.427-27.676l-37.147-7.745a11.626 11.626 0 0 0-10.143 2.717l-21.648 19.506c-6.269 5.645-14.867 7.665-22.986 5.407-8.119-2.259-14.431-8.419-16.881-16.479l-.849-2.78a11.623 11.623 0 0 0-12.684-8.113l-20.859 2.813a11.876 11.876 0 0 0-3.229.925l-55.054 24.739a41.681 41.681 0 0 1-35.333-.512 41.732 41.732 0 0 1-22.328-27.444 42.142 42.142 0 0 1-1.278-10.22c0-19.389 13.188-36.098 32.073-40.631l26.288-6.274c3.214-.776 5.682-3.148 6.584-6.342.9-3.19.04-6.496-2.301-8.844l-2.942-2.914c-4.706-4.725-7-11.194-6.324-17.781a21.852 21.852 0 0 1 9.742-16.067l50.119-33.138c8.401-5.554 18.88-6.285 28.033-1.945 6.786 3.194 16.856 7.449 29.921 12.637a38.291 38.291 0 0 0 45.292-13.282l.013-.019c.081-.129.181-.281.247-.373 2.513-3.491 3.461-7.746 2.672-11.981a15.55 15.55 0 0 0-6.846-10.259l-25.809-16.827a28.646 28.646 0 0 1-12.596-19.327 28.63 28.63 0 0 1 5.765-22.318 28.426 28.426 0 0 1 12.033-8.881C797.73 90.58 700.595 62.903 600.005 62.903c-95.386 0-188.421 25.143-270.221 72.857 7.207 2.755 13.69 7.425 18.52 13.662l12.329 15.865a42.554 42.554 0 0 1 8.2 34.162 42.556 42.556 0 0 1-20.279 28.694l-4.179 2.45c-6.955 4.082-11.688 10.678-13.332 18.571-1.643 7.899.073 15.843 4.83 22.369 5.356 7.335 13.667 11.545 22.792 11.545a27.975 27.975 0 0 0 16.566-5.397l56.448-41.168c12.843-9.362 28.537-13.011 44.19-10.283 15.664 2.731 29.207 11.488 38.128 24.655l7.802 11.544a57.962 57.962 0 0 1 7.847 48.144 58.01 58.01 0 0 1-31.66 37.166l-45.067 20.754a27.244 27.244 0 0 0-13.118 12.906l-46.023 96.018c-1.999 4.183-5.402 7.673-9.581 9.818l-37.601 19.161c-5.079 2.603-10.884 3.066-16.332 1.294a21.26 21.26 0 0 1-12.399-10.514c-.628-1.078-5.767-9.773-12.709-17.593-9.967-11.239-20.854-16.599-29.88-14.716-5.561 1.162-9.823 5.133-11.693 10.896-3.252 10.026 1.127 22.965 11.711 34.612.149.164.29.337.421.516l62.672 85.204c1.626 2.1 4.3 3.315 7.065 3.211l77.423-3.509c24.108-1.061 46.063 13.397 54.528 36.038l4.215 11.373c1.467 3.925 5.674 6.226 9.778 5.311l45.927-10.07c22.285-4.867 45.667 4.651 58.213 23.687l8.18 12.414a52.76 52.76 0 0 1-8.112 67.822l-64.893 60.476c-15.926 14.842-22.686 35.925-28.244 56.244-4.288 15.636-10.932 30.165-19.75 43.19l-67.063 99.305c-8.159 14.575-11.416 31.226-9.412 48.17 2.548 21.572.096 36.719-7.287 45.025a21.177 21.177 0 0 1-2.507 2.362c64.477 26.502 132.787 39.945 203.56 39.945 296.154 0 537.091-240.94 537.091-537.094a542.183 542.183 0 0 0-5.361-75.945zm-624.483 39.961c-6.156 6.119-14.29 9.48-22.918 9.48h-43.958c-17.862 0-32.393-14.532-32.393-32.395 0-8.632 3.363-16.766 9.468-22.903 6.161-6.128 14.292-9.49 22.926-9.49h43.958c17.862 0 32.393 14.532 32.393 32.393-.001 8.663-3.366 16.801-9.476 22.915zm105.854-423.793-16.107 101.236c-2.291 14.398-14.534 24.849-29.112 24.849h-1.601c-13.019 0-24.337-8.356-28.159-20.793l-20.105-65.116c-1.888-6.124-7.197-10.654-13.524-11.542l-29.263-4.077c-16.009-2.238-27.289-17.079-25.149-33.083a29.564 29.564 0 0 1 9.775-18.266 29.535 29.535 0 0 1 19.437-7.311h104.694a29.448 29.448 0 0 1 22.422 10.332 29.445 29.445 0 0 1 6.692 23.771zM62.907 600c0-62.736 10.708-123.973 31.78-182.328l18.83 56.593c2.301 6.927 3.468 14.939 4.709 23.42 2.737 18.762 5.568 38.161 21.416 48.774 21.249 14.22 58.42 14.519 85.562 14.737 4.333.035 8.326.067 11.835.16 13.992.378 18.328 13.44 18.683 21.099.308 6.642-1.933 13.672-6.813 14.26l-19.311 2.324c-10.698 1.296-18.764 10.398-18.764 21.169l-.025 77.257c0 51.949 42.264 94.213 94.213 94.213h16.211c4.696 0 8.517 3.821 8.517 8.517v264.015C164.872 968.065 62.907 791.227 62.907 600z"
      />
      <Path
        fill="#123B4F"
        d="M910.004 145.65C818.513 83.075 711.315 50 600.001 50c-100.549 0-198.55 27.287-284.081 78.986-2.388 1.443-26.572 17.138-28.151 18.23-86.935 60.135-156.008 145.491-196.303 242.991-1.52 1.091-2.58 2.81-2.71 4.82a19.862 19.862 0 0 0-.026 1.9C63.04 461.563 50.001 529.875 50.001 600c0 199.594 108.465 383.889 283.054 480.958a512.984 512.984 0 0 0 27.045 14.086C435.198 1131.511 515.913 1150 600.001 1150c303.27 0 549.997-246.728 549.997-550 0-27.401-2.022-54.826-6.007-81.512v.004c-22.38-150.625-107.668-286.522-233.987-372.842zm-310.003 991.444c-70.773 0-139.083-13.444-203.56-39.945a21.177 21.177 0 0 0 2.507-2.362c7.383-8.306 9.836-23.453 7.287-45.025-2.004-16.944 1.253-33.596 9.412-48.17l67.063-99.305c8.817-13.024 15.462-27.554 19.75-43.19 5.558-20.319 12.319-41.402 28.244-56.244l64.893-60.476a52.76 52.76 0 0 0 8.112-67.822l-8.18-12.414c-12.545-19.036-35.927-28.554-58.213-23.687l-45.927 10.07c-4.104.915-8.311-1.386-9.778-5.311l-4.215-11.373c-8.465-22.641-30.42-37.1-54.528-36.038l-77.423 3.509c-2.765.103-5.44-1.112-7.065-3.211l-62.672-85.204a6.314 6.314 0 0 0-.421-.516c-10.584-11.647-14.963-24.586-11.711-34.612 1.87-5.762 6.133-9.734 11.693-10.896 9.027-1.883 19.913 3.477 29.88 14.716 6.942 7.82 12.082 16.516 12.709 17.593a21.26 21.26 0 0 0 12.399 10.514c5.447 1.772 11.252 1.308 16.332-1.294l37.601-19.161c4.179-2.145 7.582-5.635 9.581-9.818l46.023-96.018a27.24 27.24 0 0 1 13.118-12.906l45.067-20.754a58.01 58.01 0 0 0 31.66-37.166 57.962 57.962 0 0 0-7.847-48.144l-7.802-11.544c-8.921-13.167-22.464-21.924-38.128-24.655-15.654-2.727-31.347.921-44.19 10.283l-56.448 41.168a27.975 27.975 0 0 1-16.566 5.397c-9.125 0-17.436-4.21-22.792-11.545-4.757-6.526-6.473-14.47-4.83-22.369 1.643-7.894 6.377-14.489 13.332-18.571l4.179-2.45a42.558 42.558 0 0 0 20.279-28.694 42.555 42.555 0 0 0-8.2-34.162L348.3 149.425c-4.83-6.237-11.313-10.908-18.52-13.662 81.8-47.714 174.835-72.857 270.221-72.857 100.59 0 197.726 27.676 282.457 80.222a28.438 28.438 0 0 0-12.033 8.881 28.63 28.63 0 0 0-5.765 22.318 28.646 28.646 0 0 0 12.596 19.327l25.809 16.827c3.622 2.366 6.055 6.009 6.846 10.259.789 4.235-.159 8.49-2.672 11.981a9.016 9.016 0 0 0-.247.373l-.013.019a38.292 38.292 0 0 1-45.292 13.282c-13.065-5.189-23.135-9.444-29.921-12.637-9.153-4.341-19.631-3.61-28.033 1.945l-50.119 33.138a21.849 21.849 0 0 0-9.742 16.067c-.676 6.587 1.618 13.056 6.324 17.781l2.942 2.914c2.342 2.348 3.201 5.654 2.301 8.844-.902 3.194-3.37 5.566-6.584 6.342l-26.288 6.274c-18.885 4.533-32.073 21.242-32.073 40.631 0 3.392.429 6.827 1.278 10.22a41.735 41.735 0 0 0 22.328 27.444 41.685 41.685 0 0 0 35.333.512l55.054-24.739a11.876 11.876 0 0 1 3.229-.925l20.859-2.813c5.659-.756 11 2.651 12.684 8.113l.849 2.78c2.45 8.06 8.762 14.22 16.881 16.479 8.119 2.259 16.717.238 22.986-5.407l21.648-19.506a11.623 11.623 0 0 1 10.143-2.717l37.147 7.745c13.203 2.746 22.427 14.127 22.427 27.676 0 7.209-2.692 13.859-7.774 19.222-5.293 5.566-12.724 8.758-20.387 8.758h-212.92c-50.527 0-91.632 41.106-91.632 91.632v22.844c0 50.526 41.105 91.633 91.632 91.633h19.102c37.717 0 68.402 30.684 68.402 68.402v101.544c0 70.516 39.928 112.617 106.809 112.617 70.04 0 106.724-67.595 106.809-134.451l9.715-133.473c.013-.156.018-.313.018-.469a14.107 14.107 0 0 1 13.619-14.166c3.121-.01 36.484-.103 55.846-19.127 8.953-8.797 13.493-20.123 13.493-33.661 0-27.384-33.213-52.284-62.516-74.253-18.477-13.851-39.416-29.553-40.797-39.26-.214-1.515.121-2.726 1.119-4.055.95-1.262 2.702-3.006 6.944-3.567 24.271-3.24 80.292 35.365 100.915 51.327a541.293 541.293 0 0 1 5.355 75.95c.001 296.151-240.937 537.091-537.091 537.091zm-286.94-991.158c9.627-.523 19.098 3.728 25.042 11.401l12.339 15.877a29.647 29.647 0 0 1 5.712 23.804 29.649 29.649 0 0 1-14.131 19.995l-4.184 2.453a41.17 41.17 0 0 0-19.435 27.074 41.19 41.19 0 0 0 7.038 32.605c7.703 10.547 20.123 16.843 33.218 16.843 8.737 0 17.09-2.721 24.166-7.872l56.451-41.17c9.987-7.28 22.195-10.123 34.37-7.997 12.188 2.125 22.721 8.937 29.658 19.174l7.799 11.542a45.074 45.074 0 0 1 6.105 37.446 45.123 45.123 0 0 1-24.627 28.91l-45.073 20.757c-8.459 3.907-15.331 10.67-19.351 19.046l-46.025 96.026c-.792 1.657-2.153 3.045-3.816 3.9l-37.596 19.159a8.39 8.39 0 0 1-6.476.513 8.458 8.458 0 0 1-4.961-4.244c-.045-.093-.096-.185-.146-.276-.245-.425-6.032-10.528-14.333-19.878-13.123-14.795-28.484-21.644-42.174-18.784-10.068 2.104-18.043 9.412-21.33 19.548-4.671 14.405.638 31.959 14.204 47.018l62.571 85.063c4.29 5.551 10.988 8.696 17.97 8.333l77.405-3.509c18.555-.781 35.36 10.289 41.849 27.647l4.215 11.376c3.716 9.924 14.32 15.681 24.645 13.415l45.917-10.068c17.085-3.743 35.043 3.567 44.674 18.182l8.182 12.414a39.889 39.889 0 0 1-6.133 51.276l-64.893 60.476c-18.401 17.148-26.112 41.14-31.894 62.279-3.912 14.267-9.964 27.511-17.995 39.368l-67.214 99.53c-.096.144-.187.29-.272.441-9.606 17.03-13.45 36.482-11.111 56.249 2.006 17 .504 29.734-4.119 34.934-1.457 1.639-3.247 2.495-5.586 2.662l-18.392-5.645c-7.546-3.654-15.142-7.619-22.668-11.752v-271.28c0-11.812-9.611-21.423-21.423-21.423h-16.211c-44.833 0-81.307-36.474-81.307-81.305l.025-77.257a8.43 8.43 0 0 1 7.406-8.359l19.306-2.322c11.386-1.371 18.855-12.75 18.162-27.673-.728-15.7-10.811-32.85-31.229-33.402-3.579-.096-7.655-.129-12.077-.165-24.073-.193-60.449-.485-78.487-12.556-11.083-7.423-13.387-23.206-15.825-39.914-1.265-8.661-2.571-17.618-5.233-25.627l-23.679-71.173c-.048-.146-.077-.288-.117-.431 41.827-103.295 116.692-192.903 211.094-252.654zM94.687 417.672l18.83 56.593c2.301 6.927 3.468 14.939 4.709 23.42 2.737 18.762 5.568 38.161 21.416 48.774 21.249 14.22 58.42 14.519 85.562 14.737 4.333.035 8.326.067 11.835.16 13.992.378 18.328 13.44 18.683 21.099.308 6.642-1.933 13.672-6.813 14.26l-19.311 2.324c-10.698 1.296-18.764 10.398-18.764 21.169l-.025 77.257c0 51.949 42.264 94.213 94.213 94.213h16.211c4.696 0 8.517 3.821 8.517 8.517v264.015C164.872 968.065 62.907 791.227 62.907 600c0-62.736 10.708-123.973 31.78-182.328zm934.442 42.256c-6.7.887-11.938 3.782-15.563 8.603-3.037 4.034-4.278 8.747-3.584 13.628 2.133 15.008 22.384 30.19 45.834 47.771 26.881 20.155 57.351 42.999 57.351 63.927 0 10.073-3.141 18.061-9.601 24.426-15.971 15.732-46.434 15.449-46.787 15.454-.106 0-.204-.003-.307.003-14.643.441-26.132 12.2-26.263 26.823l-9.715 133.486a5.655 5.655 0 0 0-.018.469c0 60.517-32.255 121.782-93.903 121.782-59.677 0-93.903-36.343-93.903-99.711V715.044c0-44.833-36.474-81.307-81.307-81.307h-19.102c-43.409 0-78.726-35.317-78.726-78.728v-22.844c0-43.41 35.317-78.726 78.726-78.726h212.923c11.182 0 22.021-4.654 29.747-12.777 7.3-7.703 11.32-17.685 11.32-28.108 0-19.729-13.448-36.306-32.703-40.311l-37.127-7.741a24.566 24.566 0 0 0-21.423 5.752l-21.655 19.513c-3.012 2.711-6.972 3.647-10.892 2.562-3.899-1.085-6.813-3.928-7.993-7.808l-.854-2.801c-3.552-11.537-14.802-18.731-26.75-17.119l-20.856 2.813a24.83 24.83 0 0 0-6.763 1.93l-55.085 24.753a28.797 28.797 0 0 1-24.418-.355 28.852 28.852 0 0 1-15.437-18.969 29.253 29.253 0 0 1-.89-7.079c0-13.399 9.12-24.946 22.172-28.079l26.293-6.277c7.829-1.888 13.808-7.64 15.994-15.385 2.185-7.741.098-15.764-5.609-21.49l-2.939-2.911a9.032 9.032 0 0 1-2.599-7.326 8.983 8.983 0 0 1 4.013-6.613l50.126-33.143c4.6-3.041 10.352-3.436 15.399-1.042 7.043 3.316 17.362 7.677 30.672 12.963 21.849 8.683 46.703 1.425 60.471-17.655.166-.219.315-.439.461-.671 4.484-6.342 6.171-14.035 4.744-21.688-1.447-7.749-5.878-14.389-12.485-18.702l-25.812-16.831c-3.733-2.431-6.186-6.197-6.907-10.601-.721-4.4.401-8.743 3.156-12.232 2.992-3.789 7.487-5.961 12.334-5.961 3.307 0 6.473 1.023 9.155 2.959a6.382 6.382 0 0 0 3.38 1.195c117.784 81.56 198.547 207.417 223.411 347.572-22.943-16.637-72.27-49.473-99.706-45.848zM583.997 106.114H479.303a29.535 29.535 0 0 0-19.437 7.311 29.564 29.564 0 0 0-9.775 18.266c-2.14 16.004 9.14 30.844 25.149 33.083l29.263 4.077c6.327.889 11.636 5.418 13.524 11.542l20.105 65.116c3.821 12.437 15.139 20.793 28.159 20.793h1.601c14.577 0 26.82-10.451 29.112-24.849l16.107-101.236a29.451 29.451 0 0 0-6.69-23.771 29.455 29.455 0 0 0-22.424-10.332zm16.367 32.077-16.107 101.234c-1.291 8.096-8.172 13.972-16.367 13.972h-1.601c-7.318 0-13.675-4.694-15.825-11.686l-20.108-65.121c-3.355-10.884-12.8-18.938-24.068-20.52l-29.265-4.078c-9.001-1.258-15.343-9.599-14.144-18.583a16.653 16.653 0 0 1 5.49-10.278 16.622 16.622 0 0 1 10.932-4.111h104.694a16.563 16.563 0 0 1 16.369 19.171zM484.337 508.703h-43.958c-8.633 0-16.765 3.363-22.926 9.49-6.105 6.137-9.468 14.271-9.468 22.903 0 17.863 14.532 32.395 32.393 32.395h43.958c8.628 0 16.763-3.361 22.918-9.48 6.11-6.114 9.475-14.252 9.475-22.914.001-17.862-14.531-32.394-32.392-32.394zm-63.446 32.393a19.43 19.43 0 0 1 5.689-13.777c3.7-3.683 8.601-5.711 13.798-5.711h43.958c10.746 0 19.487 8.742 19.487 19.487 0 5.217-2.024 10.114-5.684 13.777-3.705 3.683-8.608 5.712-13.803 5.712h-43.958c-10.745.001-19.487-8.742-19.487-19.488z"
      />
    </Svg>
  );
};
export default SvgComponent;