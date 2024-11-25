const FeatureFlags = () => {
  const featureFlags = [
    { title: "Feature1", newFeature: true },
    { title: "Feature2", deprecatedFeature: true },
    { title: "Feature3", newFeature: true },
    { title: "Feature4", deprecatedFeature: false },
  ];
  return (
    <div>
      {featureFlags.map((feature, index) => {
        return (
          <>
            {!feature.deprecatedFeature ? (
              <div className="bg-green-500" key={index}>
                {feature.title}
                {feature.newFeature ? <p className="font-bold">New</p> : ""}
              </div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default FeatureFlags;

// ### **Exercise 10: Feature Flags**
// **Task:**
// Create a component where certain features are rendered based on `featureFlags`:
// - Display "New Feature!" only if `featureFlags.newFeature` is true.
// - Hide "Deprecated Feature" if `featureFlags.deprecatedFeature` is true.

// **Hints:**
// - Use boolean flags stored in an object for feature visibility.

// ---
