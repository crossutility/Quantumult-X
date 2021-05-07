/**
* @fileoverview Example to deal with current configuration through API $configuration.sendMessage.
*
*
* Action: url_latency_benchmark
* Do the URL Latency Benchmark for the input servers (actually server tags),
* So you can customize (combined with task) your static policy to a url-latency-benchmark like policy.
* For more features maybe added in the future, you may have more control over the policy.
* Returns a JSON like {"ret" : {"Node-001" : [31, 126], "Node-002" : [23, -1]}}
*
*
* Action: get_customized_policy
* Returns a JSON
*
*
* Action: get_policy_state
* Returns a JSON like {"ret" : {"policy1" : ["policy1", "thePolicyThatPolicy1Selected", ... , "theLeaf1"],
* "policy2" : ["policy2", "thePolicyThatPolicy2Selected", ... ,"theLeaf2"]}}
*
*
* Action: set_policy_state
* This only works for the static type policy and the built-in policy named "proxy".
* Related active connections will be closed if the "Moderated Policy Mechanism" is turned off,
* the returned JSON from set_policy_state will resolve (promise) only when all the related connections
* are closed.
* If this API is called in a response type script, even all the related active connections
* (including the connection that called this API) will be closed, but actually the reponse of this connection
* has already been completely received.
* Returns an updated policy state in JSON like {"ret" : {"policy1" : ["policy1", "thePolicyThatPolicy1Selected", ... ,
* "theLeaf1"], "policy2" : ["policy2", "thePolicyThatPolicy2Selected", ... , "theLeaf2"]}}
*
*
* @supported Quantumult X (v1.0.22-build545) iOS 13.0 +
*/


/*
const dict = {"proxy": "Node-002", "cPolicy": "Node-007"};
const message = {
    action: "set_policy_state",
    content: dict
};
*/

/*
const array = ["Node-001","Node-002","Node-003","Node-004"];
const message = {
    action: "url_latency_benchmark",
    content: array
};
*/

/*
const message = {
    action: "get_customized_policy"
};
*/

/*
const data = "PolicyName";
const message = {
    action: "get_customized_policy",
    content: data
};
*/

/*
const data = ["PolicyName1","PolicyName2"];
const message = {
    action: "get_customized_policy",
    content: data
};
*/


const message = {
    action: "get_policy_state"
};


$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log(output);
    }
    $done();
}, reject => {
    // Normally will never happen.
    $done();
});
