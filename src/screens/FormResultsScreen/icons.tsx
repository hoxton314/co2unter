export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'oldTreesAbsorption':
      return (
        <>
          <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M280-80v-160H0l154-240H80l280-400 120 172 120-172 280 400h-74l154 240H680v160H520v-160h-80v160H280Zm389-240h145L659-560h67L600-740l-71 101 111 159h-74l103 160Zm-523 0h428L419-560h67L360-740 234-560h67L146-320Zm0 0h155-67 252-67 155-428Zm523 0H566h74-111 197-67 155-145Zm-149 80h160-160Zm201 0Z" />
          </svg>
        </>
      )
    case 'mediumTreeAbsorption':
      return (
        <>
          <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M224.5-74.5v-68.13h221.43v-172.83H360q-85.66 0-145.82-60.16t-60.16-145.84q0-60.92 33-112.38 33-51.46 89.48-75.66 10.2-76.2 68.18-127.05 57.98-50.86 135.32-50.86t135.32 50.86Q673.3-785.7 683.5-709.5q56.48 24.2 89.6 75.66 33.12 51.46 33.12 112.38 0 85.68-60.32 145.84T600-315.46h-85.93v172.83H745.5v68.13h-521ZM360-383.59h240q57.44 0 97.64-40.19 40.21-40.19 40.21-97.6 0-41.34-23.67-75.35-23.67-34.02-61.14-50.79l-32.95-14.24-4.24-36.44q-7-52.04-45.59-86.44-38.58-34.4-90.26-34.4-51.68 0-90.26 34.4-38.59 34.4-45.59 86.44l-4.24 36.44-32.95 14.24q-37.47 16.75-61.14 50.94-23.67 34.18-23.67 75.21 0 56.98 40.21 97.38 40.2 40.4 97.64 40.4Zm120-217.84Z" />
          </svg>
        </>
      )
    case 'seedlingAbsorption':
      return (
        <>
          <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M440-120v-319q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-80h80q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h80v80q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v200h-80Zm0-400q0-48-18.5-91.5T369-689q-34-34-77.5-52.5T200-760q0 48 18 92t52 78q34 34 78 52t92 18Zm80 120q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T590-569q-34 34-52 77.5T520-400Zm0 0Zm-80-120Z" />
          </svg>
        </>
      )
    case 'totalEmissions':
      return (
        <>
          <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
          </svg>
        </>
      )
  }

  return <></>
}
