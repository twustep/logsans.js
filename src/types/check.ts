/**
 * Options for check LogSans events
 */
 export interface CheckOptions {
    /**
     * Project name
     * example: "my-saas"
     */
    project: string;
  
    /**
     * Channel name
     * example: "waitlist"
     */
    channel: string;
  
    /**
     * Event name
     * example: "User Joined"
     */
    event: string;
  
    /**
     * How often LogSans should check (in minutes)
     * example: "5"
     */
    frequency: number;
  
  }