/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export interface components {
  schemas: {
    Order: {
      id?: number
      petId?: number
      quantity?: number
      shipDate?: string
      /**
       * Order Status
       */
      status?: 'placed' | 'approved' | 'delivered'
      complete?: boolean
    }
    Category: { id?: number; name?: string }
    User: {
      id?: number
      username?: string
      firstName?: string
      lastName?: string
      email?: string
      password?: string
      phone?: string
      /**
       * User Status
       */
      userStatus?: number
    }
    Tag: { id?: number; name?: string }
    Pet: {
      id?: number
      category?: components['schemas']['Category']
      name: string
      photoUrls: string[]
      tags?: components['schemas']['Tag'][]
      /**
       * pet status in the store
       */
      status?: 'available' | 'pending' | 'sold'
    }
    ApiResponse: { code?: number; type?: string; message?: string }
  }
}
