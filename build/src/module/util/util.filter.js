(function (angular) {
    'use strict';
    angular
        .module('bettermarks.util.filter', [
            'bettermarks', // TODO: remove this module after "timezone fix" is enabled,
            'bettermarks.util.time'
        ])

        .factory('DateRange', ["getCurrentDate", function(getCurrentDate){

            function Range(rangeKey, label, from, to) {
                this.from = from;
                this.to = to;
                this.id = rangeKey;
                this.label = label;
            }

            Range.prototype.getDates = function(){
                var result = {};

                if(this.from !== undefined){
                    var start = getCurrentDate();
                    start.setDate(start.getDate() + this.from);
                    start.setHours(0, 0, 0, 0);
                    result.start = start;
                }

                if(this.to !== undefined){
                    var end = getCurrentDate();
                    end.setDate(end.getDate() + this.to);
                    end.setHours(23, 59, 59, 0);
                    result.end = end;
                }
                return result;
            };

            return Range;
        }])

        .factory('DateRanges', ["DateRange", "SettingsService", function(DateRange, SettingsService) {

            var pastAndFutureRanges;
            var pastRanges;
            var activityRanges;


            function getPastAndFuture() {
                if(pastAndFutureRanges){
                    return pastAndFutureRanges;
                }

                var upcomingKey = "upcoming";
                var next14Key = "next14days";
                var next7Key = "next7days";
                var tomorrowKey = "tomorrow";
                var todayKey = "today";
                var yesterdayKey = "yesterday";
                var last7Key = "last7days";
                var last14Key = "last14days";
                var upcomingLabelKey = "jsapp.teacher.dashboard.todos.upcoming";
                var next14LabelKey = "jsapp.teacher.dashboard.todos.next14days";
                var next7LabelKey = "jsapp.teacher.dashboard.todos.next7days";
                var tomorrowLabelKey = "jsapp.teacher.dashboard.todos.tomorrow";
                var todayLabelKey = "jsapp.teacher.dashboard.todos.today";
                var yesterdayLabelKey = "jsapp.teacher.dashboard.todos.yesterday";
                var last7LabelKey = "jsapp.teacher.dashboard.todos.last7days";
                var last14LabelKey = "jsapp.teacher.dashboard.todos.last14days";

                var result = [];

                result.push(new DateRange(upcomingKey, upcomingLabelKey, 1));
                result.push(new DateRange(next14Key, next14LabelKey, 1, 14));
                result.push(new DateRange(next7Key, next7LabelKey, 1, 7));
                result.push(new DateRange(tomorrowKey, tomorrowLabelKey, 1, 1));
                result.push(new DateRange(todayKey, todayLabelKey, 0, 0));
                result.push(new DateRange(yesterdayKey, yesterdayLabelKey, -1, -1));
                result.push(new DateRange(last7Key, last7LabelKey, -7, -1));
                result.push(new DateRange(last14Key, last14LabelKey, -14, -1));

                pastAndFutureRanges = result;

                return result;
            }

            function getPastRanges(){

                if(pastRanges){
                    return pastRanges;
                }

                var result = [];
                var allKey = "all";
                var todayKey = "today";
                var last1Key = "last1days";
                var last7Key = "last7days";
                var last30Key = "last30days";


                var allLabelKey = "jsapp.teacher.dashboard.completedExercises.all";
                var todayLabelKey = "jsapp.teacher.dashboard.completedExercises.today";
                var last1LabelKey = "jsapp.teacher.dashboard.completedExercises.last1day";
                var last7LabelKey = "jsapp.teacher.dashboard.completedExercises.last7days";
                var last30LabelKey = "jsapp.teacher.dashboard.completedExercises.last30days";

                result.push(new DateRange(allKey, allLabelKey));
                result.push(new DateRange(todayKey, todayLabelKey, 0));
                result.push(new DateRange(last1Key, last1LabelKey, -1));
                result.push(new DateRange(last7Key, last7LabelKey, -7));
                result.push(new DateRange(last30Key, last30LabelKey, -30));

                pastRanges = result;

                return result;
            }

            function getActivitiesRanges(){
                var result = [];
                var todayLabel = 'jsapp.general.datefilter.today';
                var yesterdayLabel = 'jsapp.general.datefilter.yesterday';
                var last7DaysLabel = 'jsapp.general.datefilter.last7';
                var last14DaysLabel = 'jsapp.general.datefilter.last14';
                var last30daysLabel = 'jsapp.general.datefilter.last30';
                var last90DaysLabel = 'jsapp.general.datefilter.last90';
                var allLabel = 'jsapp.general.datefilter.all';


                result.push(new DateRange('today', todayLabel,0 ));
                result.push(new DateRange('yesterday', yesterdayLabel, -1));
                result.push(new DateRange('last7Days', last7DaysLabel, -7));
                result.push(new DateRange('last14Days', last14DaysLabel, -14));
                result.push(new DateRange('last30Days', last30daysLabel, -30));
                result.push(new DateRange('last90Days', last90DaysLabel, -90));
                result.push(new DateRange('all', allLabel));

                activityRanges = result;
                return result;
            }


            function DateRanges(type) {
                if(type == "past"){
                    this.ranges = getPastRanges();
                }else if(type == "pastAndFuture"){
                    this.ranges = getPastAndFuture();
                }else if(type == "activities"){
                    this.ranges = getActivitiesRanges();
                    //this is the only filter set which do not take the first filter by default
                    this.defaultFilter = "last7Days";
                }
            }

            DateRanges.prototype.getById = function (id, defaultKey){
                var result;
                for (var i = 0; i < this.ranges.length; i++) {
                    var range = this.ranges[i];
                    if(range.id === id){
                        result = range;
                        break;
                    }
                }

                //Not found
                if(!result) {
                    if(defaultKey) {
                        // get the default filter
                        result = this.getById(defaultKey);
                    }else {
                        // no default -> take the first one
                        result = this.ranges[0];
                    }
                }
                return result;
            };

            DateRanges.prototype.storeCurrentFilter = function (dashboardKey, selectedRange){
                SettingsService.put(dashboardKey, selectedRange.id);
            };

            DateRanges.prototype.loadCurrentFilter = function(filterSetKey){
                var filterKey = SettingsService.get(filterSetKey);
                return this.getById(filterKey, this.defaultFilter);
            };

            return DateRanges;
        }])
    ;
})
(angular);
