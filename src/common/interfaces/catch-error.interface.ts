export interface CatchError {
  errorResponse: ErrorResponse;
  index: number;
  code: number;
  keyPattern: KeyPattern2;
  keyValue: KeyValue2;
}

export interface ErrorResponse {
  index: number;
  code: number;
  errmsg: string;
  keyPattern: KeyPattern;
  keyValue: KeyValue;
}

export interface KeyPattern {
  email: number;
}

export interface KeyValue {
  email: string;
}

export interface KeyPattern2 {
  email: number;
}

export interface KeyValue2 {
  email: string;
}