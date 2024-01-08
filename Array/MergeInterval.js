module.exports = {
    /**
     * Interval: [start, end]
     * 
     * param A: intervals, a list of Intervals
     * return :a list of Intervals
     */
    solve: function (intervals, new_interval) {
        
        intervals.push(new_interval);

        intervals.sort((a, b) => {
            
            if ( a[0] < b[0] )
                return -1;

            if ( a[0] > b[0] )
                return 1;

            if ( a[0] === b[0] && a[1] < b[1] )
                return -1;
            
            if ( a[0] === b[0] && a[1] > b[1] )
                return 1;
            
            return 0;
        })

        // console.log('intervals', intervals)


        let ans = [];

        for ( let i = 0; i < intervals.length; i++ )
        {
            if ( ans.length === 0 )
            {
                ans.push(intervals[i]);
                continue;
            }
            
            let lastInterval = ans[ans.length - 1];
            
            //non overlapping
            // if ( lastInterval[1] < intervals[i][0] )
            // {
            //     ans.push(intervals[i]);
            //     continue;
            // }
            
            // if ( lastInterval[0] === intervals[i][0] || lastInterval[1] < intervals[i][0] )
            // {
            //     ans[ans.length - 1] = [lastInterval[0], Math.max(intervals[i][1], lastInterval[1])];
            //     continue;
            // }
            
            if ( Math.max(lastInterval[1], lastInterval[0]) < Math.max(intervals[i][0], intervals[i][1]) )
            {
                ans.push(intervals[i]);
                continue;
            }
            
            ans[ans.length - 1] = [Math.min(lastInterval[0], intervals[i][0]), Math.max(lastInterval[1], intervals[i][1])];
        }

        return ans;
    },
};

// push the interval
// sort the intervals.


// case 1: 