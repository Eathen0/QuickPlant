class Cookie {
   // private properties
   #date = new Date()

   /**
    * 
    * @param {string} name name of cookie
    * @param {string} data data cookie
    * @param {number} expires number of day (1 = 1day)
    */
   constructor(name, data, expires) {
      this.name = name
      this.data = data
      this.createdAt = this.#date.getTime()
      this.expires = expires ? this.#numToStrExpires(expires) : null
      
   }
   
   // private method
   #updateCookie() {
      if (this.name != null & this.expires != null & this.data != null || this.isExist()) 
         document.cookie = `${this.name}=${this.data || this.isExist()}; SameSite=None; expires=${this.expires}; Secure`
   }
   
   /**
    * 
    * @param {number} num number of day
    * @returns {string} 
    */
   #numToStrExpires(num) {
      this.#date.setTime(this.createdAt + 86400000 * num)
      return this.#date.toUTCString()
   }

   destroy() {
      if (this.isExist()) {
         this.expires = "Sun, 14 Jan 1998 09:33:23 GMT"
         this.#updateCookie()
      }
   }

   /**
    * 
    * @param {string} data 
    * @returns {void}
    */
   updateData(data) {
      this.data = data
      this.#updateCookie()
   }

   /**
    * 
    * @param {number} expires number of day
    * @returns {void}
    */
   updateExpires(expires) {
      this.expires = this.#numToStrExpires(expires)
      this.#updateCookie()
   }

   /**
    * 
    * @param {string} data cookie data
    * @param {number} expires number of day
    * @returns {void}
    */
   updateDataAndExpires(data, expires) {
      this.data = data
      this.expires = this.#numToStrExpires(expires)
      this.#updateCookie()
   }

   /**
    * @returns {null | string}
    */
   isExist() {
      if (document.cookie.includes(this.name)) {
         return document.cookie.slice(
            document.cookie.indexOf("=", document.cookie.indexOf(this.name)) + 1,
            document.cookie.indexOf(";", document.cookie.indexOf(this.name)) != -1
               ? document.cookie.indexOf(";", document.cookie.indexOf(this.name))
               : document.cookie.length
         )
      }

      return null
   }
}

/**
 * @param {string} name
 * @param {string} data
 * @param {number} expires number of day (1 = 1day)
 */
const useCookie = (name, data = null, expires = null) => {
   return new Cookie(name, data, expires)
}
export default useCookie