/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/pet": {
    put: operations["updatePet"];
    post: operations["addPet"];
  };
  "/pet/findByStatus": {
    /** Multiple status values can be provided with comma separated strings */
    get: operations["findPetsByStatus"];
  };
  "/pet/findByTags": {
    /** Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing. */
    get: operations["findPetsByTags"];
  };
  "/pet/{petId}": {
    /** Returns a single pet */
    get: operations["getPetById"];
    post: operations["updatePetWithForm"];
    delete: operations["deletePet"];
  };
  "/pet/{petId}/uploadImage": {
    post: operations["uploadFile"];
  };
  "/store/inventory": {
    /** Returns a map of status codes to quantities */
    get: operations["getInventory"];
  };
  "/store/order": {
    post: operations["placeOrder"];
  };
  "/store/order/{orderId}": {
    /** For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions */
    get: operations["getOrderById"];
    /** For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors */
    delete: operations["deleteOrder"];
  };
  "/user": {
    /** This can only be done by the logged in user. */
    post: operations["createUser"];
  };
  "/user/createWithArray": {
    post: operations["createUsersWithArrayInput"];
  };
  "/user/createWithList": {
    post: operations["createUsersWithListInput"];
  };
  "/user/login": {
    get: operations["loginUser"];
  };
  "/user/logout": {
    get: operations["logoutUser"];
  };
  "/user/{username}": {
    get: operations["getUserByName"];
    /** This can only be done by the logged in user. */
    put: operations["updateUser"];
    /** This can only be done by the logged in user. */
    delete: operations["deleteUser"];
  };
}

export interface definitions {
  Order: {
    /** Format: int64 */
    id?: number;
    /** Format: int64 */
    petId?: number;
    /** Format: int32 */
    quantity?: number;
    /** Format: date-time */
    shipDate?: string;
    /**
     * @description Order Status
     * @enum {string}
     */
    status?: "placed" | "approved" | "delivered";
    complete?: boolean;
  };
  Category: {
    /** Format: int64 */
    id?: number;
    name?: string;
  };
  User: {
    /** Format: int64 */
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    /**
     * Format: int32
     * @description User Status
     */
    userStatus?: number;
  };
  Tag: {
    /** Format: int64 */
    id?: number;
    name?: string;
  };
  Pet: {
    /** Format: int64 */
    id?: number;
    category?: definitions["Category"];
    /** @example doggie */
    name: string;
    photoUrls: string[];
    tags?: definitions["Tag"][];
    /**
     * @description pet status in the store
     * @enum {string}
     */
    status?: "available" | "pending" | "sold";
  };
  ApiResponse: {
    /** Format: int32 */
    code?: number;
    type?: string;
    message?: string;
  };
}

export interface operations {
  updatePet: {
    parameters: {
      body: {
        /** Pet object that needs to be added to the store */
        body: definitions["Pet"];
      };
    };
    responses: {
      /** Invalid ID supplied */
      400: unknown;
      /** Pet not found */
      404: unknown;
      /** Validation exception */
      405: unknown;
    };
  };
  addPet: {
    parameters: {
      body: {
        /** Pet object that needs to be added to the store */
        body: definitions["Pet"];
      };
    };
    responses: {
      /** Invalid input */
      405: unknown;
    };
  };
  /** Multiple status values can be provided with comma separated strings */
  findPetsByStatus: {
    parameters: {
      query: {
        /** Status values that need to be considered for filter */
        status: ("available" | "pending" | "sold")[];
      };
    };
    responses: {
      /** successful operation */
      200: {
        schema: definitions["Pet"][];
      };
      /** Invalid status value */
      400: unknown;
    };
  };
  /** Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing. */
  findPetsByTags: {
    parameters: {
      query: {
        /** Tags to filter by */
        tags: string[];
      };
    };
    responses: {
      /** successful operation */
      200: {
        schema: definitions["Pet"][];
      };
      /** Invalid tag value */
      400: unknown;
    };
  };
  /** Returns a single pet */
  getPetById: {
    parameters: {
      path: {
        /** ID of pet to return */
        petId: number;
      };
    };
    responses: {
      /** successful operation */
      200: {
        schema: definitions["Pet"];
      };
      /** Invalid ID supplied */
      400: unknown;
      /** Pet not found */
      404: unknown;
    };
  };
  updatePetWithForm: {
    parameters: {
      path: {
        /** ID of pet that needs to be updated */
        petId: number;
      };
      formData: {
        /** Updated name of the pet */
        name?: string;
        /** Updated status of the pet */
        status?: string;
      };
    };
    responses: {
      /** Invalid input */
      405: unknown;
    };
  };
  deletePet: {
    parameters: {
      header: {
        api_key?: string;
      };
      path: {
        /** Pet id to delete */
        petId: number;
      };
    };
    responses: {
      /** Invalid ID supplied */
      400: unknown;
      /** Pet not found */
      404: unknown;
    };
  };
  uploadFile: {
    parameters: {
      path: {
        /** ID of pet to update */
        petId: number;
      };
      formData: {
        /** Additional data to pass to server */
        additionalMetadata?: string;
        /** file to upload */
        file?: unknown;
      };
    };
    responses: {
      /** successful operation */
      200: {
        schema: definitions["ApiResponse"];
      };
    };
  };
  /** Returns a map of status codes to quantities */
  getInventory: {
    parameters: {};
    responses: {
      /** successful operation */
      200: {
        schema: { [key: string]: number };
      };
    };
  };
  placeOrder: {
    parameters: {
      body: {
        /** order placed for purchasing the pet */
        body: definitions["Order"];
      };
    };
    responses: {
      /** successful operation */
      200: {
        schema: definitions["Order"];
      };
      /** Invalid Order */
      400: unknown;
    };
  };
  /** For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions */
  getOrderById: {
    parameters: {
      path: {
        /** ID of pet that needs to be fetched */
        orderId: number;
      };
    };
    responses: {
      /** successful operation */
      200: {
        schema: definitions["Order"];
      };
      /** Invalid ID supplied */
      400: unknown;
      /** Order not found */
      404: unknown;
    };
  };
  /** For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors */
  deleteOrder: {
    parameters: {
      path: {
        /** ID of the order that needs to be deleted */
        orderId: number;
      };
    };
    responses: {
      /** Invalid ID supplied */
      400: unknown;
      /** Order not found */
      404: unknown;
    };
  };
  /** This can only be done by the logged in user. */
  createUser: {
    parameters: {
      body: {
        /** Created user object */
        body: definitions["User"];
      };
    };
    responses: {
      /** successful operation */
      default: unknown;
    };
  };
  createUsersWithArrayInput: {
    parameters: {
      body: {
        /** List of user object */
        body: definitions["User"][];
      };
    };
    responses: {
      /** successful operation */
      default: unknown;
    };
  };
  createUsersWithListInput: {
    parameters: {
      body: {
        /** List of user object */
        body: definitions["User"][];
      };
    };
    responses: {
      /** successful operation */
      default: unknown;
    };
  };
  loginUser: {
    parameters: {
      query: {
        /** The user name for login */
        username: string;
        /** The password for login in clear text */
        password: string;
      };
    };
    responses: {
      /** successful operation */
      200: {
        headers: {};
        schema: string;
      };
      /** Invalid username/password supplied */
      400: unknown;
    };
  };
  logoutUser: {
    parameters: {};
    responses: {
      /** successful operation */
      default: unknown;
    };
  };
  getUserByName: {
    parameters: {
      path: {
        /** The name that needs to be fetched. Use user1 for testing. */
        username: string;
      };
    };
    responses: {
      /** successful operation */
      200: {
        schema: definitions["User"];
      };
      /** Invalid username supplied */
      400: unknown;
      /** User not found */
      404: unknown;
    };
  };
  /** This can only be done by the logged in user. */
  updateUser: {
    parameters: {
      path: {
        /** name that need to be updated */
        username: string;
      };
      body: {
        /** Updated user object */
        body: definitions["User"];
      };
    };
    responses: {
      /** Invalid user supplied */
      400: unknown;
      /** User not found */
      404: unknown;
    };
  };
  /** This can only be done by the logged in user. */
  deleteUser: {
    parameters: {
      path: {
        /** The name that needs to be deleted */
        username: string;
      };
    };
    responses: {
      /** Invalid username supplied */
      400: unknown;
      /** User not found */
      404: unknown;
    };
  };
}

export interface external {}
