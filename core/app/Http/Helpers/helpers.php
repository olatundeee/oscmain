<?php
  
    function getWorkingDays($startDate, $endDate)
    {        
        $begin = strtotime($startDate)+86400;
        $end   = strtotime($endDate);
        if ($begin > $end) 
        {
            // echo "startdate is in the future! <br />";
            return 0;
        } 
        else 
        {
            $no_days  = 0;
            $weekends = 0;
            while ($begin <= $end) 
            {
                $no_days++; // no of days in the given interval      
                $what_day = date("N", $begin);
                if ($what_day > 5) { // 6 and 7 are weekend days
                   $weekends++;
                   // echo $what_day;
                };               
                $begin += 86400;   // +1 day                 
            };
            $working_days = $no_days - $weekends;
            return $working_days;
        }
    }
    
    function getDays($startDate, $endDate)
    {        
        $begin = strtotime($startDate)+86400;
        $end   = strtotime($endDate);
        if ($begin > $end) 
        {
            // echo "startdate is in the future! <br />";
            return 0;
        } 
        else 
        {
            $no_days  = 0;
            $weekends = 0;
            while ($begin <= $end) 
            {
                $no_days++; // no of days in the given interval      
                $what_day = date("N", $begin);
                if ($what_day > 5) { // 6 and 7 are weekend days
                   $weekends++;
                   // echo $what_day;
                };               
                $begin += 86400;   // +1 day                 
            };
            // $working_days = $no_days - $weekends;
            return $no_days;
        }
    }

    function search_user()
    {

        $v = Session::get('val');
        $users_table = App\kyc::where('username', 'like', '%'.$v.'%')->orderby('id', 'desc')->paginate(100);
        Session::forget('val');
        return $users_table;
        
    }