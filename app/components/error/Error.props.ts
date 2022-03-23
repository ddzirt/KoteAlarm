import {ErrorInfo} from 'react';

export interface ErrorProps {
  error: Error;
  errorInfo: ErrorInfo | null;
  onReset(): void;
}
