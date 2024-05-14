const __caches = {}

const useCaches = () => {
   return {
      getCache: (key) => {
         return __caches[key]
      },

      setCache: (key, val) => {
         __caches[key] = val
      },

      deleteCache: (key) => {
         delete __caches[key]
      }
   }
}

export default useCaches